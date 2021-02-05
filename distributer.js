var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  config = require('./config/config.json'),
  cors = require('cors'),
  methodOverride = require('method-override'),
  logger = require('./utils/logfile/logger').logger,
  redis = require('redis'), 
  client = redis.createClient(config.Redis_PORT);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  next();
});

client.on('connect', function () {
  console.log("connected");
});

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.listen(config.PORT , function (err) {
  if ( !err )
    logger.info('server connected on :'+ config.PORT);
});
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  parameterLimit: 52428800,
  limit: '100mb', extended: true
}));

app.use('/v1', require('./routes'));