var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var routes = require('./routes')

const PORT = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.listen(PORT, function () {
  console.log('started listen port', PORT);
})