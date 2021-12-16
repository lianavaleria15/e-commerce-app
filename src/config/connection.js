const Sequelize = require("sequelize");

const dbName = process.env.DB_NAME;

const dbUser = process.env.DB_USER;

const dbPassword = process.env.DB_PASSWORD;

const dbHost = process.env.DB_HOST;

const dbOptions = {
  host: dbHost,
  dialect: "mysql",
  password: dbPassword,
  database: dbName,
  user: dbUser,
  port: 3306,
};

const connection = new Sequelize(dbOptions);

module.exports = connection;
