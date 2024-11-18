'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Exchange', [
      // AED
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 1,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 2,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 3,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 4,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 5,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 6,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 7,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },      {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 8,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 9,
      //   exchangeRateId: 3,
      //   displayedExchangeRateId: 3
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 10,
      //   exchangeRateId: 26,
      //   displayedExchangeRateId: 27,
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 13,
      //   exchangeRateId: 22,
      //   displayedExchangeRateId: 23,
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 14,
      //   exchangeRateId: 24,
      //   displayedExchangeRateId: 25,
      // },
      // {
      //   sourceFinancialId: 11,
      //   targetFinancialId: 15,
      //   exchangeRateId: 28,
      //   displayedExchangeRateId: 25,
      // },
      // {
      //   sourceFinancialId: 2,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 2,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // -SBER-
      // {
      //   sourceFinancialId: 1,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 1,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 1,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // -VTB-
      // {
      //   sourceFinancialId: 2,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 2,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 2,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // // -ALFA-
      // {
      //   sourceFinancialId: 3,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 3,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 3,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // {
      //   sourceFinancialId: 3,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 3,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 3,
      //   targetFinancialId: 11,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // // -TBANK-
      // {
      //   sourceFinancialId: 4,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 4,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 4,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // {
      //   sourceFinancialId: 4,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 4,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 4,
      //   targetFinancialId: 11,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // // -GAZPROM-
      // {
      //   sourceFinancialId: 5,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 5,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 5,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // {
      //   sourceFinancialId: 5,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 5,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 5,
      //   targetFinancialId: 11,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // // -RSCHB-
      // {
      //   sourceFinancialId: 6,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 6,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 6,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // {
      //   sourceFinancialId: 6,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 6,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 6,
      //   targetFinancialId: 11,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // // -MCBRUB-
      // {
      //   sourceFinancialId: 7,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 7,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 7,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // {
      //   sourceFinancialId: 7,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 7,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 7,
      //   targetFinancialId: 11,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // // -SKBRUB-
      // {
      //   sourceFinancialId: 8,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 8,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 8,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // {
      //   sourceFinancialId: 8,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 8,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 8,
      //   targetFinancialId: 11,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // // -RBRUB-
      // {
      //   sourceFinancialId: 9,
      //   targetFinancialId: 13,
      //   exchangeRateId: 8,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 9,
      //   targetFinancialId: 14,
      //   exchangeRateId: 10,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 9,
      //   targetFinancialId: 15,
      //   exchangeRateId: 12,
      //   displayedExchangeRateId: 13,
      // },
      // {
      //   sourceFinancialId: 9,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 9,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 9,
      //   targetFinancialId: 11,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },

      // -CASHRUB-

      // {
      //   sourceFinancialId: 16,
      //   targetFinancialId: 11,
      //   exchangeRateId: 2,
      //   displayedExchangeRateId: 3,
      // },
      // {
      //   sourceFinancialId: 16,
      //   targetFinancialId: 12,
      //   exchangeRateId: 4,
      //   displayedExchangeRateId: 5,
      // },
      // {
      //   sourceFinancialId: 16,
      //   targetFinancialId: 10,
      //   exchangeRateId: 6,
      //   displayedExchangeRateId: 7,
      // },

      // -USDTTRC20-

      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 1,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 2,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 3,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 4,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 5,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 6,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 7,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 8,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 9,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 16,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 11,
      //   exchangeRateId: 17,
      //   displayedExchangeRateId: 17,
      // },
      // {
      //   sourceFinancialId: 10,
      //   targetFinancialId: 1,
      //   exchangeRateId: 7,
      //   displayedExchangeRateId: 7,
      // },

      // -BTC-

      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 1,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 2,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 3,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 4,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 5,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 6,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 7,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 8,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 9,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 16,
      //   exchangeRateId: 9,
      //   displayedExchangeRateId: 9,
      // },
      // {
      //   sourceFinancialId: 13,
      //   targetFinancialId: 11,
      //   exchangeRateId: 23,
      //   displayedExchangeRateId: 23,
      // },

      // -ETH-

      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 1,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 2,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 3,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 4,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 5,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 6,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 7,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 8,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 9,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 16,
      //   exchangeRateId: 11,
      //   displayedExchangeRateId: 11,
      // },
      // {
      //   sourceFinancialId: 14,
      //   targetFinancialId: 11,
      //   exchangeRateId: 25,
      //   displayedExchangeRateId: 25,
      // },

      // -TONCOIN-

      {
        sourceFinancialId: 15,
        targetFinancialId: 1,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 2,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 3,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 4,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 5,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 6,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 7,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 8,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 9,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 16,
        exchangeRateId: 13,
        displayedExchangeRateId: 13,
      },
      {
        sourceFinancialId: 15,
        targetFinancialId: 11,
        exchangeRateId: 29,
        displayedExchangeRateId: 29,
      },
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
