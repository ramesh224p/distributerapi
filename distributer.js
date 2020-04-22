var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  config = require('./config/config.json'),
  methodOverride = require('method-override');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  next();
});

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.listen(config.PORT);
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  parameterLimit: 100000,
  limit: '50mb', extended: true
}));

app.use('/v1', require('./routes'));