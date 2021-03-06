const db = require('../db');
const Sequelize = require('sequelize');

const Member = db.define('member', {
  name: Sequelize.STRING,
  group: Sequelize.INTEGER,
  major: Sequelize.STRING,
  info: Sequelize.STRING,
  photo: Sequelize.STRING,
  github: Sequelize.STRING,
  blog: Sequelize.STRING,
});

module.exports = Member;
