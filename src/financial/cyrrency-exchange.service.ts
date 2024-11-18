import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourseExchangeModel } from './models/currency-exchange.model';

@Injectable()
export class CurrencyExchangeService {
  constructor(
    @InjectModel(CourseExchangeModel)
    private readonly courseExchangeModel: typeof CourseExchangeModel,
  ) {}

  public async findCurrencyToRub(
    sourceCurrencyId: number,
  ): Promise<CourseExchangeModel> {
    return this.courseExchangeModel.findOne({
      where: { sourceCurrencyId: sourceCurrencyId, targetCurrencyId: 1 },
    });
  }
}
