import { Router } from "express";

import { tryCatch } from "../middlewares/trycatch.js";

import {
  searchProduct,
} from "../controllers/index.js";

export const searchRouter = Router();

searchRouter.get("/product", tryCatch(searchProduct));