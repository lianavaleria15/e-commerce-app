const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

//create a new sequelize model for category
class Category extends Model {}

// define columns
const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

//link to db connection
const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "category",
};
Category.init(schema, options);

module.exports = Category;
