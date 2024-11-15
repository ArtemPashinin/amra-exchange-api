'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tg_user_id: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false,
      },
      tg_topic_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      tg_username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Currency');
  },
};
