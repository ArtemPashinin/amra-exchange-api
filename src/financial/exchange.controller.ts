import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ExchangeModel } from './models/financial-exchange.model';
import { ExchangeService } from './exchgange.service';
import { ICreateClaimDto } from './interfaces/dto/create-claim.dto';
import { ClaimValidationPipe } from './validators/claim-validation.pipe';
import { claimValidationSchema } from './validators/schemas/claim-validation.schema';
import { UserService } from 'src/user/user.service';
import { TelegramBot } from 'src/bot/bot.service';
import {
  createClaimMessage,
  createForeignClaimMessage,
} from 'src/bot/utils/create-claim-message';
import { CurrencyExchangeService } from './cyrrency-exchange.service';
import { CourseExchangeModel } from './models/currency-exchange.model';
import { ForeignClaimValidationPipe } from './validators/foreign-claim-validation.pipe';
import { ICreateForeignClaimDto } from './interfaces/dto/create-foreign-claim.dto';
import { foreignClaimValidationSchema } from './validators/schemas/foreign-claim-validation.schema';

@Controller('exchange')
export class ExchangeController {
  constructor(
    private readonly exchangeService: ExchangeService,
    private readonly userServise: UserService,
    private readonly telegramBot: TelegramBot,
    private readonly currencyExchangeService: CurrencyExchangeService,
  ) {}

  @Get()
  async findAll(): Promise<ExchangeModel[]> {
    return await this.exchangeService.findAll();
  }

  @Get(':id?')
  async findAllForfirstFinancial(
    @Param('id', new ParseIntPipe())
    id?: number,
    @Query('type') type?: string,
  ): Promise<ExchangeModel[]> {
    return await this.exchangeService.finadAllById(id, type);
  }

  @Post()
  async createClaim(
    @Body(new ClaimValidationPipe(claimValidationSchema)) body: ICreateClaimDto,
  ): Promise<number> {
    const claimMessage = createClaimMessage(body);
    const user = await this.userServise.findOne(body.user.tgUserId);
    await this.telegramBot.createClaim(user, claimMessage);
    return 200;
  }

  @Post('foreign')
  async createForeignClaim(
    @Body(new ForeignClaimValidationPipe(foreignClaimValidationSchema))
    body: ICreateForeignClaimDto,
  ): Promise<number> {
    const claimMessage = createForeignClaimMessage(body);
    const user = await this.userServise.findOne(body.user.tgUserId);
    await this.telegramBot.createClaim(user, claimMessage);
    return 200;
  }

  @Get('rub-currency/:id')
  public async getRubCurrency(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CourseExchangeModel> {
    return await this.currencyExchangeService.findCurrencyToRub(id);
  }
}
