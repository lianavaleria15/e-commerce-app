//import category and product models
const { Tag } = require("../../models");

const getAllTags = async (req, res) => {
  try {
    const allTagsData = await Tag.findAll();
    return res.status(200).json(allTagsData);
  } catch (error) {
    console.log(`[ERROR]: Failed to get tags | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};
const getTag = async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id);

    if (!tagData) {
      res.status(404).json({
        success: false,
        message: "Tag does not exist",
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    console.log(`[ERROR]: Failed to get tag by id | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const createTag = async (req, res) => {
  try {
    const tag = req.body;

    const newTag = await Tag.create(tag);

    res.status(200).json(newTag);
  } catch (error) {
    console.log(`[ERROR]: Failed to create tag| ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateTag = async (req, res) => {
  try {
    const { updatedTag } = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTag = async (req, res) => {
  //delete tag by id from DB
  try {
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete tag | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getAllTags, getTag, createTag, updateTag, deleteTag };
