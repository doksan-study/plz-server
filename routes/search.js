import { Router } from "express";

import tryCatch from "../middlewares/trycatch";

import {
  searchProduct,
} from "../controllers";

export const searchRouter = Router();

searchRouter.get("/product", tryCatch(searchProduct));