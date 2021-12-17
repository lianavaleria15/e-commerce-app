//import category and product models
const { Category, Product } = require("../../models");

const getAllCategories = async (req, res) => {
  try {
    const allCategoriesData = await Category.findAll();
    res.status(200).json(allCategoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
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
