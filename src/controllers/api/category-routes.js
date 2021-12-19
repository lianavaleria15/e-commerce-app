//import category and product models
const { Category } = require("../../models/");

const cleanupPayload = (payload) => {
  const editableFields = ["category_name"];

  //go through payload and check if each field exists in editable fields array
  return Object.entries(payload).reduce((acc, { key, value }) => {
    if (editableFields.includes(key)) {
      return {
        ...acc,
        [key]: value,
      };
    }
    return acc;
  }, {});
};

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
    //get the fields to update from the req body
    const payload = cleanupPayload(req.body);
    console.log(req.body);
    console.log(payload);
    //validate payload
    if (Object.keys(payload).length) {
      //update teh category in the DB
      await Category.update(payload, { where: { id: req.params.id } });

      //send response
      return res.json({ success: true });
    }

    //send bad request response
    return res
      .status(400)
      .json({ success: false, error: "Please provide a valid category name" });
  } catch (error) {
    console.log(`[ERROR]: Failed to update category | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  //delete category by id from DB
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete category | ${error.message}`);
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
