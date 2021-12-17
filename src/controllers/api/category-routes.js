//import category and product models
const { Category, Product } = require("../../models");

const getAllCategories = (req, res) => {
  Category.findAll().then((data) => {
    res.json(data);
  });
};

const getCategory = (req, res) => {
  console.log("Get category");
};

const createCategory = (req, res) => {
  console.log("Create category");
};

const updateCategory = (req, res) => {
  console.log("Update category");
};

const deleteCategory = (req, res) => {
  console.log("Delete category");
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
