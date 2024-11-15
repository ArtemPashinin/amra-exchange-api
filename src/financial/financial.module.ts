import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CurrencyModel } from './models/currency.model';
import { FinancialModel } from './models/financial.model';
import { ExchangeModel } from './models/financial-exchange.model';
import { FinancialTypeModel } from './models/financial-type.model';
import { CourseExchangeModel } from './models/cyrrency-exchange.model';
import { FinancialController } from './financial.controller';
import { ConfigModule } from '@nestjs/config';
import { FinancialService } from './financial.service';
import { ExchangeService } from './exchgange.service';
import { ExchangeController } from './exchange.controller';
import { UserModule } from 'src/user/user.module';
import { BotModule } from 'src/bot/bot.module';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forFeature([
      CurrencyModel,
      FinancialModel,
      ExchangeModel,
      FinancialTypeModel,
      CourseExchangeModel,
    ]),
    UserModule,
    BotModule,
  ],
  controllers: [FinancialController, ExchangeController],
  providers: [FinancialService, ExchangeService],
})
export class FinancialModule {}
