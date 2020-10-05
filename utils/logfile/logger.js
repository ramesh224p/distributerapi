var winston = require('winston');

module.exports.logger = winston.createLogger({
    transports : [
        new winston.transports.File({
            level : 'info',
            filename : 'filelog-info.log',
            json : true,
            format : winston.format.combine(winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), winston.format.json())
        }),

        new winston.transports.File({
            level : 'debug',
            filename : 'filelog-info.log',
            json : true,
            format : winston.format.combine(winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), winston.format.json())
        })
    ]
})