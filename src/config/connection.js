const Sequelize = require("sequelize");

const dbName = process.env.DB_NAME;

const dbUser = process.env.DB_USER;

const dbPassword = process.env.DB_PASSWORD;

const dbOptions = {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: 3306,
};

const connection = new Sequelize(dbName, dbUser, dbPassword, dbOptions);

module.exports = connection;
