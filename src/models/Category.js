const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

//create a new sequelize model for category
class Category extends Model {}

Category.init(
  // define columns
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
    },
  },

  //link to db connection
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
