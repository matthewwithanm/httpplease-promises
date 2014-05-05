/*jshint strict:false */

var app,
    express = require('express'),
    cors = require('cors');

app = express();

app.get('/getjson', cors(), function (req, res) {
    res.json({hello: 'world'});
});

app.all('/404', cors(), function (req, res) {
    res.json(404, {sad: 'panda'});
});


module.exports = app;
