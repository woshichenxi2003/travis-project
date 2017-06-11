var express = require('express')
var app = express()

app.get('/', function(req, res) {
        res.send('Hello World')
    })
    //来一个错误
app.listen(3000)