const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  searchProduct,
} = require("../controllers");

router.get("/product", tryCatch(searchProduct));

module.exports = router;