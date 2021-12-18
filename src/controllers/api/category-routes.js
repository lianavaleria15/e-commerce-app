//import category and product models
const { Category, Product, Tag } = require("../../models");

const getAllCategories = async (req, res) => {
  try {
    const allCategoriesData = await Category.findAll();
    return res.status(200).json(allCategoriesData);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getCategory = async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id);

    if (!categoryData) {
      res.status(404).json({ message: "No location was found for this id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(err).json(err);
  }
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
