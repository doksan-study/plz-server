"use strict";

import { Model, DataTypes } from "sequelize";

export class review extends Model {
  static init(sequelize) {

    super.init({
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      status: DataTypes.INTEGER
    }, {
      sequelize,
      underscored: false,
      freezeTableName: true,
      modelName: "review",
      tableName: "Review"
    });
  }

  static associate(sequelize) {
    this.belongsTo(sequelize.models.product);
    this.belongsTo(sequelize.models.user);
  }
}