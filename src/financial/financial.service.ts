import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FinancialModel } from './models/financial.model';
import { CurrencyModel } from './models/currency.model';
import { Op } from 'sequelize';

@Injectable()
export class FinancialService {
  constructor(
    @InjectModel(FinancialModel)
    private readonly financialModel: typeof FinancialModel,
  ) {}

  async findAll(excludeId?: number, type?: string): Promise<FinancialModel[]> {
    const whereCondition : any= excludeId ? { id: { [Op.ne]: excludeId } } : {};

    if (type) {
      whereCondition.type = type
    }

    return await this.financialModel.findAll({
      where: whereCondition,
      include: [
        {
          model: CurrencyModel,
          required: true,
          attributes: { exclude: ['id'] },
        },
      ],
      attributes: {
        exclude: ['currencyId'],
      },
    });
  }

  async findOne(id: number): Promise<FinancialModel> {
    return await this.financialModel.findOne({
      where: { id: { [Op.eq]: id } },
      attributes: { exclude: ['currencyId'] },
    });
  }
}
