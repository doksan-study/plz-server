const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  productCreate,
  productEdit,
  productList,
  productDetail,
  productDelete,
} = require("../controllers");

router.post("/", tryCatch(productCreate));
router.patch("/", tryCatch(productEdit));
router.get("/list", tryCatch(productList));
router.get("/:productId", tryCatch(productDetail));
router.delete("/:productId", tryCatch(productDelete));

module.exports = router;