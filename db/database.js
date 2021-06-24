
//sequelize
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/stock-app',{logging: false});
console.log('hello from database file');
  module.exports = {sequelize};