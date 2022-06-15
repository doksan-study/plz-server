"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.product);
      this.belongsTo(models.user);
    }
  }
  Review.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "review",
    tableName: "Review"
  });
  return Review;
};