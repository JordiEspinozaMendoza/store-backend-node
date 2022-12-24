const { Router } = require("express");
const router = Router();

const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
