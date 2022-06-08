const { Router } = require("express");
const router = Router();

const product = require("./product");
const review = require("./review");

router.use("/product", product);
router.use("/review", review);

module.exports = router;