// copy to dist folder and run by node app.js
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var api = require('./routes/api');
var config = require("./config");

var mongoose = require('mongoose');
mongoose.connect(config.URL);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname + '/dist')));
app.use('/static', express.static('public'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './dist/index.html'));
 
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') == 'development') {
    app.listen(3000, function () {
        console.log('Example listening on port 3000!');
    });
}
else {
    app.listen(8080, function () {
        console.log('Example listening on port 8080!');
    });
}
module.exports = app;