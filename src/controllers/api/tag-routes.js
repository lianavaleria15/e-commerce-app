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
const createTag = (req, res) => {};
const updateTag = async (req, res) => {};
const deleteTag = async (req, res) => {};

module.exports = { getAllTags, getTag, createTag, updateTag, deleteTag };
