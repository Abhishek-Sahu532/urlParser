const Sequelize = require('sequelize');

const db = new Sequelize('url', 'user', 'pass',{
  host: 'localhost',
  dialect: 'sqlite'
})

module.exports = db;