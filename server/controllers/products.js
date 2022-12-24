const models = require("../../database/models");

const getProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await models.Product.findOne({
      where: { id: id },
    });
    if (product) {
      res.status(200).json({ product });
    }
    res.status(404).send("Product with the specified ID does not exists");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const createProduct = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const category = await models.categorie.findOne({
      where: { id: categoryId },
    });
    if (!category) {
      res.status(404).send("Category with the specified ID does not exists");
    } else {
      const product = await models.Product.create(req.body);
      res.status(201).json({
        product,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await models.Product.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send({
        message: "Product deleted",
        product: deleted,
        date: new Date(),
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
