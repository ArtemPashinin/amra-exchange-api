import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ExchangeModel } from './models/financial-exchange.model';
import { FinancialModel } from './models/financial.model';
import { CourseExchangeModel } from './models/cyrrency-exchange.model';
import { CurrencyModel } from './models/currency.model';
import { FinancialTypeModel } from './models/financial-type.model';

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
          attributes: { exclude: ['id', 'financialTypeId', 'currencyId'] },
        },
        {
          model: FinancialModel,
          as: 'targetFinancial',
          required: true,
          attributes: { exclude: ['id', 'financialTypeId', 'currencyId'] },
          include: [
            {
              model: FinancialTypeModel,
              required: true,
              as: 'type',
            },
          ],
        },
        {
          model: CourseExchangeModel,
          as: 'courseExchange',
          required: true,
          attributes: {
            exclude: ['id', 'firstCurrencyId', 'secondCurrencyId'],
          },
          include: [
            {
              model: CurrencyModel,
              as: 'firstCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
            {
              model: CurrencyModel,
              as: 'secondCurrency',
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
    if (type) condition['$targetFinancial.type.type$'] = type;
    return await this.exchangeModel.findAll({
      where: condition,
      include: [
        {
          model: FinancialModel,
          as: 'sourceFinancial',
          required: true,
          attributes: { exclude: ['financialTypeId', 'currencyId'] },
          include: [
            {
              model: FinancialTypeModel,
              as: 'type',
              required: true,
              attributes: ['type'],
            },
          ],
        },
        {
          model: FinancialModel,
          as: 'targetFinancial',
          required: true,
          attributes: { exclude: ['financialTypeId', 'currencyId'] },
          include: [
            {
              model: FinancialTypeModel,
              as: 'type',
              required: true,
              attributes: ['type'],
            },
          ],
        },
        {
          model: CourseExchangeModel,
          as: 'courseExchange',
          required: true,
          attributes: {
            exclude: ['id', 'firstCurrencyId', 'secondCurrencyId'],
          },
          include: [
            {
              model: CurrencyModel,
              as: 'firstCurrency',
              required: true,
              attributes: { exclude: ['id'] },
            },
            {
              model: CurrencyModel,
              as: 'secondCurrency',
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
