const { Router } = require("express");
const req = require("express/lib/request");

const router = Router();

const {
  getAllTags,
  getTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../../controllers/api/tag-routes");

// The `/api/tags` endpoint
router.get("/", getAllTags);

router.get("/:id", getTag);

router.post("/", createTag);

router.put("/:id", updateTag);

router.delete("/:id", deleteTag);

module.exports = router;
