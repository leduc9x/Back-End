var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var routes = require('./routes')
var fileUpload = require('express-fileupload')

const PORT = 4000
const corsOption = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOption))
app.use(fileUpload())

routes(app)

app.listen(PORT, function () {
  console.log('started listen port', PORT);
})