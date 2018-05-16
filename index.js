const Express = require('express')
const helmet = require('helmet')
const serveStatic = require('serve-static')

if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const app = Express();

app.use(helmet())
app.use(serveStatic('public'))

app.use((req, res, next) => {
  console.log('middleware')
  next()
});

app.get('/', function (req, res) {
  console.log('Hello')
  res.send(`hello`)
})

app.get('/user/:id', function (req, res) {
  res.send(`hello user ${req.params.id}`)
})

app.listen(process.env.PORT, function () {
  console.log('start listen http://localhost:3000')
})