"use strict";

import { Model, DataTypes } from "sequelize";

export class product extends Model {
  static init(sequelize) {

    super.init({
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
  }

  static associate(sequelize) {
    this.hasMany(sequelize.models.review, { foreignKey: "productId" });
  }
}