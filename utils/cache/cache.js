var redis = require('redis'),
    config = require('../../config/config.json'),
    client = redis.createClient(config.Redis_PORT);

function cache () {

}

cache.prototype.redis = function(req, res, next) {
    var r = req.originalUrl;
    var usern = r.split('/');
    var username = usern[2];
    client.get(username , (error, data) => {
      if (error) throw error;
      if (data != null) {
        res.status(200).send({status : true, data: JSON.parse(data)});
      } else {
        next();
      }
    });
}

module.exports = cache;