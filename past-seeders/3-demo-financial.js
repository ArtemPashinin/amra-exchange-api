'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Financial', [
      {
        name: 'Сбербанк RUB',
        currencyName: 'SBERRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'Банк ВТБ',
        currencyName: 'VTBRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'Альфа-банк',
        currencyName: 'ALFARUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'Т-Банк',
        currencyName: 'TCSRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'ГазпромБанк',
        currencyName: 'GPBRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'РоссельхозБанк',
        currencyName: 'RSCHBBRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'Московский Кредитный Банк',
        currencyName: 'MCBRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'СовкомБанк',
        currencyName: 'SKBRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'РосБанк',
        currencyName: 'RBRUB',
        currencyId: 1,
        type: 'банк',
      },
      {
        name: 'USDT TRC 20',
        currencyName: 'USDTTRC20',
        currencyId: 4,
        type: 'криптовалюта',
      },
      {
        name: 'Наличные дирхамы в Дубай',
        currencyName: 'AED',
        currencyId: 2,
        type: 'наличные',
      },
      {
        name: 'Наличные доллары в Дубай',
        currencyName: 'USD',
        currencyId: 3,
        type: 'наличные',
      },
      {
        name: 'Bitcoin',
        currencyName: 'BTC',
        currencyId: 5,
        type: 'криптовалюта',
      },
      {
        name: 'Ethereum',
        currencyName: 'ETH',
        currencyId: 6,
        type: 'криптовалюта',
      },
      {
        name: 'Ton Coin',
        currencyName: 'TON',
        currencyId: 7,
        type: 'криптовалюта',
      },
    ]);
    console.log('Сидер для Financial завершён.');
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
