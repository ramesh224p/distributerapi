var redis = require('redis'),
    config = require('../../config/config.json'),
    logger = require('../logfile/logger').logger,
    client = redis.createClient(config.Redis_PORT);

module.exports.redis = function(req, res, next) {
    var username = req.originalUrl.split('/')[2];
    if ( req.query ) {
      client.del(username);
    }
    client.get(username , (error, data) => {
      logger.info("incoming request REDIS", {
        method : req.method,
        url : req.baseUrl,
        error : error
      });
      if (error) throw error;
      if (data != null) {
        res.status(200).send({status : true, data: JSON.parse(data)});
      } else {
        next();
      }
    });
}