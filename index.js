var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.get('/', function(req, res){
  var obj = {};
  obj.ip = req.ip.match(/\d+[.]\d+[.]\d+[.]\d+/)[0];
  obj.software = req.headers['user-agent'].match(/\(([^)]+)\)/)[1];
  obj.language = req.headers['accept-language'].substr(0, 5);
  res.send(obj);
});

app.listen(process.env.PORT || 8080);
