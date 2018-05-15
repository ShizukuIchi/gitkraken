const Express = require('express');
const helmet = require('helmet')
const serveStatic = require('serve-static')
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

app.listen(process.env || 3000, function () {
  console.log('start listen http://localhost:3000')
})