import { Router } from "express";

import multer from 'multer';
import { upload } from "../config/s3.js";

import { tryCatch } from "../middlewares/trycatch.js";
import {
  productCreate,
  productEdit,
  productList,
  productDetail,
  productDelete,
} from "../controllers/index.js";

export const productRouter = Router();

productRouter.post("/", upload.single("thumbnail"), tryCatch(productCreate));
productRouter.put("/", upload.single("thumbnail"), tryCatch(productEdit));
productRouter.get("/list", tryCatch(productList));
productRouter.get("/:productId", tryCatch(productDetail));
productRouter.delete("/:productId", tryCatch(productDelete));