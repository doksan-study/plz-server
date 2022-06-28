import { Router } from "express";
import product from "./product.js";
import review from "./review.js";
import search from "./search.js";

export const router = Router();

router.use("/product", product);
router.use("/review", review);
router.use("/search", search);