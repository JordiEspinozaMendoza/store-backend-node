const models = require("../../database/models");

const getCategories = async (req, res) => {
  try {
    const items = await models.categorie.findAll();
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getCategoryById = async (req, res) => {
  try {
    const item = await models.categorie.findOne({
      where: { id: req.params.id },
    });
    if (item) {
      res.status(200).json({ item });
    } else {
      res.status(404).json({
        message: "Category with the specified ID does not exists",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  getCategories,
  getCategoryById,
};
