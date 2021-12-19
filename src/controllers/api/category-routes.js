//import category and product models
const { Category } = require("../../models/");

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

const createCategory = async (req, res) => {
  try {
    const { newCategoryData } = await Category.create(req.body);
    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { updatedCategory } = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { updatedCategory } = await Category.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
