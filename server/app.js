var host = "127.0.0.1";
var port = 1337;
var express = require("express");

var app = express();
app.use('/', express.static('c:\\Users\\Varun\\Desktop\\GIT_Preojects\\frontEnd\\DemoReact_swiigy\\build'));

app.listen(port, host);