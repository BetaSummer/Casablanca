const db = require('../config/db');
const Sequelize = require('sequelize');

const Member = db.define('member', {
  name: Sequelize.STRING,
  generation: Sequelize.INTEGER,
  major: Sequelize.STRING,
  info: Sequelize.STRING,
  photo: Sequelize.STRING,
  github: Sequelize.STRING,
  blog: Sequelize.STRING,
});

module.exports = Member;
