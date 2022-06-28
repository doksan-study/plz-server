import { Router } from "express";
import { productRouter } from "./product.js";
import { reviewRouter } from "./review.js";
import { searchRouter } from "./search.js";

export const router = Router();

router.use("/product", productRouter);
router.use("/review", reviewRouter);
router.use("/search", searchRouter);