import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RangesService } from './ranges.service';
import { RangesModel } from './models/ranges.model';

@Controller('ranges')
export class RangesController {
  constructor(private readonly rangesService: RangesService) {}

  @Get('fee/:amount')
  async findByAmount(
    @Param('amount', ParseIntPipe) amount: number,
  ): Promise<number> {
    return await this.rangesService.findFee(amount);
  }

  @Get('minimum')
  async getMinimum(): Promise<number> {
    return await this.rangesService.findMinimum();
  }

  @Get()
  async findAll(): Promise<RangesModel[]> {
    return this.rangesService.findAll();
  }
}
