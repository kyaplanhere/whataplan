var express = require('express')
var app = express()

// it returns helloworld on root url
app.get('/', function(req, res){
    res.send("Hello world")
});

app.get('/getcat', function(req, res){
    res.send("Ideally this function should give out all categories");
});
var server = app.listen(8080)
