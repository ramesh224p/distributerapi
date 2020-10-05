var redis = require('redis'),
    config = require('../../config/config.json'),
    client = redis.createClient(config.Redis_PORT);

module.exports.redis = function(req, res, next) {
    var username = req.originalUrl.split('/')[2];
    client.get(username , (error, data) => {
      if (error) throw error;
      if (data != null) {
        res.status(200).send({status : true, data: JSON.parse(data)});
      } else {
        next();
      }
    });
}