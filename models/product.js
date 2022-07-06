"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.hasMany(models.review, { foreignKey: "productId" });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: false,
    freezeTableName: true,
    modelName: "product",
    tableName: "Product"
  });
  return Product;
};