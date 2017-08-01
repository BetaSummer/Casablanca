const mysql = require('./config.dev.js').mysql;
const Sq = require('sequelize');

const sequelize = new Sq(mysql.uri);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;
