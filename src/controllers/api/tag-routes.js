//import category and product models
const { Tag } = require("../../models");

const cleanupPayload = (payload) => {
  const editableFields = ["tag_name"];

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
    //get the fields to update from the req body
    const payload = cleanupPayload(req.body);
    console.log(req.body);
    console.log(payload);
    //validate payload
    if (Object.keys(payload).length) {
      //update teh category in the DB
      await Tag.update(payload, { where: { id: req.params.id } });

      //send response
      return res.json({ success: true });
    }

    //send bad request response
    return res
      .status(400)
      .json({ success: false, error: "Please provide a valid payload" });
  } catch (error) {
    console.log(`[ERROR]: Failed to update tag | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
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
