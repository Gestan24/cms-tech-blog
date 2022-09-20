const Sequelize = require('sequelize');

require('dotenv').config();


const sequelize = process.env.JAWSDB_URL ? new Sequelize(process.env.JAWSDB_URL) : new Sequelize('cms_tech_blog', process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  
});

module.exports = sequelize;