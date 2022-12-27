const { Router } = require("express");
const router = Router();

const productsRouter = require("./products");
const categorieRouter = require("./categorie");
const userRouter = require("./user");
router.use("/products", productsRouter);
router.use("/categorie", categorieRouter);
router.use("/user", userRouter);

module.exports = router;
