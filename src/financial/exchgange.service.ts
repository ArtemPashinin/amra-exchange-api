import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ExchangeModel } from './models/financial-exchange.model';
import { FinancialModel } from './models/financial.model';
import { CourseExchangeModel } from './models/currency-exchange.model';
import { CurrencyModel } from './models/currency.model';

@Injectable()
export class ExchangeService {
  constructor(
    @InjectModel(ExchangeModel)
    private readonly exchangeModel: typeof ExchangeModel,
  ) {}

  async findAll(): Promise<ExchangeModel[]> {
    return await this.exchangeModel.findAll({
      include: [
        {
          model: FinancialModel,
          as: 'sourceFinancial',
          required: true,
          attributes: { exclude: ['id', 'currencyId'] },
        },
        {
          model: FinancialModel,
          as: 'targetFinancial',
          required: true,
          attributes: { exclude: ['id', 'currencyId'] },
          include: [],
        },
        {
          model: CourseExchangeModel,
          as: 'courseExchange',
          required: false,
          attributes: {
            exclude: ['id', 'targetCurrencyId'],
          },
          include: [
            {
              model: CurrencyModel,
              as: 'sourceCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
            {
              model: CurrencyModel,
              as: 'targetCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
          ],
        },
        {
          model: CourseExchangeModel,
          as: 'displayedCourseExchange',
          required: false,
          attributes: {
            exclude: ['id', 'targetCurrencyId'],
          },
          include: [
            {
              model: CurrencyModel,
              as: 'sourceCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
            {
              model: CurrencyModel,
              as: 'targetCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
          ],
        },
      ],
      attributes: {
        exclude: [
          'id',
          'sourceFinancialId',
          'targetFinancialId',
          'exchangeRateId',
        ],
      },
    });
  }

  public async finadAllById(
    id?: number,
    type?: string,
  ): Promise<ExchangeModel[]> {
    const condition = id ? { sourceFinancialId: id } : {};
    if (type) condition['$targetFinancial.type$'] = type;
    return await this.exchangeModel.findAll({
      where: condition,
      include: [
        {
          model: FinancialModel,
          as: 'sourceFinancial',
          required: true,
          attributes: { exclude: ['currencyId'] },
        },
        {
          model: FinancialModel,
          as: 'targetFinancial',
          required: true,
          attributes: { exclude: ['currencyId'] },
          include: [],
        },
        {
          model: CourseExchangeModel,
          as: 'courseExchange',
          required: false,
          attributes: {
            exclude: ['id'],
          },
          include: [
            {
              model: CurrencyModel,
              as: 'sourceCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
            {
              model: CurrencyModel,
              as: 'targetCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
          ],
        },
        {
          model: CourseExchangeModel,
          as: 'displayedCourseExchange',
          required: false,
          attributes: {
            exclude: ['id', 'targetCurrencyId'],
          },
          include: [
            {
              model: CurrencyModel,
              as: 'sourceCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
            {
              model: CurrencyModel,
              as: 'targetCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
          ],
        },
      ],
      attributes: {
        exclude: [
          'id',
          'sourceFinancialId',
          'targetFinancialId',
          'exchangeRateId',
        ],
      },
    });
  }
}
