const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  userSignUp,
  userSignIn,
} = require("../controllers");

router.post("/signup", tryCatch(userSignUp));
router.post("/signin", tryCatch(userSignIn));

module.exports = router;