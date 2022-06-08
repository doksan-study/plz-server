'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Reviews", "productId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Reviews", {
      fields: ["productId"],
      type: "foreign key",
      references: {
        table: "Products",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Reviews", "productId");
  }
};
