const { Router } = require("express");
const router = Router();

const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} = require("../controllers/products");
const { verifyToken } = require("../../utils/auth");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", verifyToken, createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
