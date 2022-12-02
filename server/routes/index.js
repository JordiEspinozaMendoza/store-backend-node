const { Router } = require("express");
const router = Router();

const productsRouter = require("./products");

router.use("/products", productsRouter);

module.exports = router;
