const dbconfig = require('./config.dev.js').db;
const Sq = require('sequelize');

const sequelize = new Sq(dbconfig.uri);
module.exports = sequelize;
