'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CourseExchange', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      sourceCurrencyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Currency',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      targetCurrencyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Currency',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      exchangeRate: {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: false,
        defaultValue: 0.0,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CourseExchange');
  },
};
