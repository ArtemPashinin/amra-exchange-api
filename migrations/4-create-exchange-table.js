'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exchange', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      sourceFinancialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Financial',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      targetFinancialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Financial',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      exchangeRateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CourseExchange',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      displayedExchangeRateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CourseExchange',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Exchange');
  },
};
