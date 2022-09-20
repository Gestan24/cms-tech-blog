const Sequelize = require('sequelize');

require('dotenv').config();


const sequelize = new Sequelize('cms_tech_blog', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false
});

module.exports = sequelize;