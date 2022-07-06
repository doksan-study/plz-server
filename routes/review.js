const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  reviewWrite,
  reviewEdit,
  reviewList,
  reviewDetail,
  reviewDelete,
} = require("../controllers");

router.post("/", tryCatch(reviewWrite));
router.put("/", tryCatch(reviewEdit));
router.get("/list", tryCatch(reviewList));
router.get("/:reviewId", tryCatch(reviewDetail));
router.delete("/:reviewId", tryCatch(reviewDelete));

module.exports = router;