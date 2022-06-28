import { Router } from "express";

import { tryCatch } from "../middlewares/trycatch.js";

import {
  reviewWrite,
  reviewEdit,
  reviewList,
  reviewDetail,
  reviewDelete,
} from "../controllers/index.js";

export const reviewRouter = Router();

reviewRouter.post("/", tryCatch(reviewWrite));
reviewRouter.put("/", tryCatch(reviewEdit));
reviewRouter.get("/list", tryCatch(reviewList));
reviewRouter.get("/:reviewId", tryCatch(reviewDetail));
reviewRouter.delete("/:reviewId", tryCatch(reviewDelete));