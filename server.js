
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Server config properties
var app = express();
var PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})


app.listen(PORT, function(){
  console.log("find me at: " + PORT);
})