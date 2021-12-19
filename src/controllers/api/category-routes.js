//import category and product models
const { Category } = require("../../models/");

const getAllCategories = async (req, res) => {
  try {
    const allCategoriesData = await Category.findAll();
    return res.status(200).json(allCategoriesData);
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id);

    if (!categoryData) {
      res.status(404).json({
        success: false,
        message: "Category does not exist",
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(`[ERROR]: Failed to get category by id | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const createCategory = async (req, res) => {
  //get new category from request body
  try {
    const category = req.body;

    //insert category in the DB
    const newCategory = await Category.create(category);

    //send response
    return res.json(newCategory);
  } catch (error) {
    console.log(`[ERROR]: Failed to create category | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
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
  } catch (error) {
    console.log(`[ERROR]: Failed to create category | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
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
  } catch (error) {
    console.log(`[ERROR]: Failed to create category | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
