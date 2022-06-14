const { Router } = require("express");
const router = Router();

const product = require("./product");
const review = require("./review");
const search = require("./search");

router.use("/product", product);
router.use("/review", review);
router.use("/search", search);

module.exports = router;