import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CurrencyModel } from './models/currency.model';
import { FinancialModel } from './models/financial.model';
import { ExchangeModel } from './models/financial-exchange.model';
import { CourseExchangeModel } from './models/currency-exchange.model';
import { FinancialController } from './financial.controller';
import { ConfigModule } from '@nestjs/config';
import { FinancialService } from './financial.service';
import { ExchangeService } from './exchgange.service';
import { ExchangeController } from './exchange.controller';
import { UserModule } from 'src/user/user.module';
import { BotModule } from 'src/bot/bot.module';
import { RangesModel } from './models/ranges.model';
import { RangesService } from './ranges.service';
import { RangesController } from './ranges.controller';
import { CurrencyExchangeService } from './cyrrency-exchange.service';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forFeature([
      CurrencyModel,
      FinancialModel,
      ExchangeModel,
      CourseExchangeModel,
      RangesModel,
    ]),
    UserModule,
    BotModule,
  ],
  controllers: [FinancialController, ExchangeController, RangesController],
  providers: [
    FinancialService,
    ExchangeService,
    RangesService,
    CurrencyExchangeService,
  ],
})
export class FinancialModule {}
