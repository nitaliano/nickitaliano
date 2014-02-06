var express = require('express');
var app     = express();
var cons    = require('consolidate');
var router  = require('./routes/router');

app.engine('html', cons.hogan);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(router());
app.use(express.static(__dirname + '/public'));

app.listen(8888);