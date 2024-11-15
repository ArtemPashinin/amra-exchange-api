import { Controller, Get, Param, Query } from '@nestjs/common';
import { FinancialService } from './financial.service';
import { FinancialModel } from './models/financial.model';

@Controller('financial')
export class FinancialController {
  constructor(private readonly financialService: FinancialService) {}

  @Get('all/:id?')
  async findAll(
    @Param('id') id?: number,
    @Query('type') type?: string,
  ): Promise<FinancialModel[]> {
    const financials = await this.financialService.findAll(id, type);
    return financials;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<FinancialModel> {
    const financial = await this.financialService.findOne(id);
    return financial;
  }
}
