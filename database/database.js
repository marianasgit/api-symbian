const Sequelize = require('sequelize')

const conection = new Sequelize(
    'symbian_db',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }

);

module.exports = conection;