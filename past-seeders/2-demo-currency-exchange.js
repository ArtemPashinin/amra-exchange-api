'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CourseExchange', [
      {
        sourceCurrencyId: 1, // RUB
        targetCurrencyId: 1, // RUB
        exchangeRate: 1,
      },
      {
        sourceCurrencyId: 1, // RUB
        targetCurrencyId: 2, // AED
        exchangeRate: 0.037,
      },
      {
        sourceCurrencyId: 2, // AED
        targetCurrencyId: 1, // RUB
        exchangeRate: 26.96,
      },
      {
        sourceCurrencyId: 1, // RUB
        targetCurrencyId: 3, // USD
        exchangeRate: 0.01,
      },
      {
        sourceCurrencyId: 3, // USD
        targetCurrencyId: 1, // RUB
        exchangeRate: 99.02,
      },
      {
        sourceCurrencyId: 1, // RUB
        targetCurrencyId: 4, // USDT
        exchangeRate: 0.01,
      },
      {
        sourceCurrencyId: 4, // USDT
        targetCurrencyId: 1, // RUB
        exchangeRate: 99.0,
      },
      {
        sourceCurrencyId: 1, // RUB
        targetCurrencyId: 5, // BTC
        exchangeRate: 0.000018,
      },
      {
        sourceCurrencyId: 5, // BTC
        targetCurrencyId: 1, // RUB
        exchangeRate: 5500000,
      },
      {
        sourceCurrencyId: 1, // RUB
        targetCurrencyId: 6, // ETH
        exchangeRate: 0.00025,
      },
      {
        sourceCurrencyId: 6, // ETH
        targetCurrencyId: 1, // RUB
        exchangeRate: 400000,
      },
      {
        sourceCurrencyId: 1, // RUB
        targetCurrencyId: 7, // TON
        exchangeRate: 0.5,
      },
      {
        sourceCurrencyId: 7, // TON
        targetCurrencyId: 1, // RUB
        exchangeRate: 2.0,
      },
      {
        sourceCurrencyId: 2, // AED
        targetCurrencyId: 3, // USD
        exchangeRate: 0.27,
      },
      {
        sourceCurrencyId: 3, // USD
        targetCurrencyId: 2, // AED
        exchangeRate: 3.7,
      },
      {
        sourceCurrencyId: 2, // AED
        targetCurrencyId: 4, // USDT
        exchangeRate: 0.27,
      },
      {
        sourceCurrencyId: 4, // USDT
        targetCurrencyId: 2, // AED
        exchangeRate: 3.7,
      },
      {
        sourceCurrencyId: 5, // BTC
        targetCurrencyId: 6, // ETH
        exchangeRate: 15.0,
      },
      {
        sourceCurrencyId: 6, // ETH
        targetCurrencyId: 5, // BTC
        exchangeRate: 0.067,
      },
      {
        sourceCurrencyId: 7, // TON
        targetCurrencyId: 6, // ETH
        exchangeRate: 0.001,
      },
      {
        sourceCurrencyId: 6, // ETH
        targetCurrencyId: 7, // TON
        exchangeRate: 1000,
      },
      {
        sourceCurrencyId: 2, // AED
        targetCurrencyId: 5, // BTC
        exchangeRate: 0.0000055, // Примерный курс AED к BTC
      },
      {
        sourceCurrencyId: 5, // BTC
        targetCurrencyId: 2, // AED
        exchangeRate: 182000, // Примерный курс BTC к AED
      },
      {
        sourceCurrencyId: 2, // AED
        targetCurrencyId: 6, // ETH
        exchangeRate: 0.00007, // Примерный курс AED к ETH
      },
      {
        sourceCurrencyId: 6, // ETH
        targetCurrencyId: 2, // AED
        exchangeRate: 14000, // Примерный курс ETH к AED
      },
      {
        sourceCurrencyId: 2, // AED
        targetCurrencyId: 4, // USDT
        exchangeRate: 0.27, // Примерный курс AED к USDT (можно оставить как есть)
      },
      {
        sourceCurrencyId: 4, // USDT
        targetCurrencyId: 2, // AED
        exchangeRate: 3.7, // Примерный курс USDT к AED (можно оставить как есть)
      },
      {
        sourceCurrencyId: 2, // AED
        targetCurrencyId: 7, // TON
        exchangeRate: 0.005, // Примерный курс AED к TON
      },
      {
        sourceCurrencyId: 7, // TON
        targetCurrencyId: 2, // AED
        exchangeRate: 200, // Примерный курс TON к AED
      },
    ]);

    console.log('asd');
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
