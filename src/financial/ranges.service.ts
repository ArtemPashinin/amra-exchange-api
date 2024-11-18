import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RangesModel } from './models/ranges.model';
import { Op } from 'sequelize';
import sequelize from 'sequelize';

@Injectable()
export class RangesService {
  constructor(
    @InjectModel(RangesModel) private readonly rangesModel: typeof RangesModel,
  ) {}

  public async findAll(): Promise<RangesModel[]> {
    return await this.rangesModel.findAll();
  }

  public async findFee(amount: number): Promise<number> {
    const { fee } = await this.rangesModel.findOne({
      where: {
        min: { [Op.lte]: amount },
        [Op.or]: [{ max: { [Op.gte]: amount } }, { max: null }],
      },
    });
    return fee;
  }

  public async findMinimum(): Promise<number> {
    const { min } = await this.rangesModel.findOne({
      attributes: [[sequelize.fn('MIN', sequelize.col('min')), 'min']],
    });
    return min;
  }
}
