'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Currency', [
      { name: 'руб.', code: 'RUB' }, // 1
      { name: 'дирхам', code: 'AED' }, // 2
      { name: 'доллар', code: 'USD' }, // 3
      { name: 'USDT TRC 20', code: 'USDT' }, // 4
      { name: 'Bitcoin', code: 'BTC' }, // 5
      { name: 'Ethereum', code: 'ETH' }, // 6
      { name: 'Ton Coin', code: 'TON' }, // 7
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
