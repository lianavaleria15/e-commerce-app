//import category and product models
const { Tag, Product, ProductTag } = require("../../models");

const getAllTags = async (req, res) => {
  try {
    const allTagsData = await Tag.findAll();
    return res.status(200).json(allTagsData);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getTag = async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id);

    if (!tagData) {
      res.status(404).json({ message: "No location was found for this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(err).json(err);
  }
};
const createTag = async (req, res) => {
  try {
    const { newTagData } = await Tag.create(req.body);
    res.status(200).json(newTagData);
  } catch (err) {
    res.status(500).json(err);
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
  try {
    const { updatedCategory } = await Tag.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllTags, getTag, createTag, updateTag, deleteTag };
