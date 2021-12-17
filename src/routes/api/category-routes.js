const { Router } = require("express");

const {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../../controllers/api/category-routes");

// The `/api/categories` endpoint

const router = Router();

router.get("/", getAllCategories);

router.get("/:id", getCategory);

router.post("/", createCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
