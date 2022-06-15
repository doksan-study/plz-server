'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Review", "productId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Review", {
      fields: ["productId"],
      type: "foreign key",
      references: {
        table: "Product",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addColumn("Review", "userId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Review", {
      fields: ["userId"],
      type: "foreign key",
      references: {
        table: "User",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Review", "productId");
    await queryInterface.removeColumn("Review", "userId");
  }
};
