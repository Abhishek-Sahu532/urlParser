const {DataTypes} = require('sequelize');
const db = require('../config/db');


const urls = db.define('url',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  URL:{
    type: DataTypes.STRING,
    required: true
  }
})


urls.sync()
module.exports = urls;