const { Router } = require("express");
const router = Router();

const { getCategories, getCategoryById } = require("../controllers/categorie");

router.get("/", getCategories);
router.get("/:id", getCategoryById);

module.exports = router;
