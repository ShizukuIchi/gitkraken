if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const Express = require('express')
const helmet = require('helmet')
const serveStatic = require('serve-static')

const { db, User } = require('./models')

const app = Express();

app.use(helmet())
app.use(serveStatic('public'))

app.use((req, res, next) => {
  console.log('middleware')
  next()
})

app.get('/', function (req, res) {
  console.log('Hello')
  res.send(`hello`)
})

app.get('/user/:id', async function (req, res) {
  const user = await User.findById(req.params.id)
  res.send(user)
})

app.get('/create/user', function (req, res) {
  User.create({
    email: 'db2@gmail.com',
    password: '12345676',
    nickname: 'shizu',
    gender: 2
  }).then(user => {
    res.send(user)
  })
})

db.sync().then(() => {
  app.listen(process.env.PORT, function () {
    console.log('start listen http://localhost:3000')
  })
})