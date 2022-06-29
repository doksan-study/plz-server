"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import { fileURLToPath } from "url";
import { product } from "../models/product.js"
import { review } from "../models/review.js"
import { user } from "../models/user.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

import { config } from "../config/config.js";

const db = {};

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.product = product;
db.review = review;
db.user = user;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db, sequelize };