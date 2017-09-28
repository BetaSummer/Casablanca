const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
