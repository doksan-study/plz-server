"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.review, { foreignKey: "userId" });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    phone: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    authLevel: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: false,
    freezeTableName: true,
    modelName: "user",
    tableName: "User"
  });
  return User;
};