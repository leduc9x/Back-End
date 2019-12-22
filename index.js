var express = require('express')
var app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Running on main path')
})

app.listen(PORT, function () {
  console.log('started listen port', PORT);
})