const { Router } = require("express");
const router = Router();

const { getCategories, getCategoryById, createCategory } = require("../controllers/categorie");

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);

module.exports = router;
