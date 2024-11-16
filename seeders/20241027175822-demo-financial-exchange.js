'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Exchange', [
      {
        sourceFinancialId: 11,
        targetFinancialId: 1,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      {
        sourceFinancialId: 11,
        targetFinancialId: 2,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      {
        sourceFinancialId: 11,
        targetFinancialId: 3,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      {
        sourceFinancialId: 11,
        targetFinancialId: 4,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      {
        sourceFinancialId: 11,
        targetFinancialId: 5,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      {
        sourceFinancialId: 11,
        targetFinancialId: 6,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      {
        sourceFinancialId: 11,
        targetFinancialId: 7,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },      {
        sourceFinancialId: 11,
        targetFinancialId: 8,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      {
        sourceFinancialId: 11,
        targetFinancialId: 9,
        exchangeRateId: 3,
        displayedExchangeRateId: 3
      },
      // {
      //   sourceFinancialId: 2,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5
      // },
      // {
      //   sourceFinancialId: 2,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7
      // },
    ]);
    console.log('asd');
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
