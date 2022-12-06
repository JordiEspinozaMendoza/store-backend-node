const { Router } = require("express");
const router = Router();

const productsRouter = require("./products");
const categorieRouter = require("./categorie");
router.use("/products", productsRouter);
router.use("/categorie", categorieRouter);

module.exports = router;
