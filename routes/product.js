const { Router } = require("express");
const router = Router();

const multer = require('multer');
const { upload } = require("../config/s3");

const tryCatch = require("../middlewares/trycatch");
const {
  productCreate,
  productEdit,
  productList,
  productDetail,
  productDelete,
} = require("../controllers");

router.post("/", upload.single("thumbnail"), tryCatch(productCreate));
router.put("/", upload.single("thumbnail"), tryCatch(productEdit));
router.get("/list", tryCatch(productList));
router.get("/:productId", tryCatch(productDetail));
router.delete("/:productId", tryCatch(productDelete));

module.exports = router;