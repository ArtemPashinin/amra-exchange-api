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
import { createClaimMessage } from 'src/bot/utils/create-claim-message';
import { CurrencyExchangeService } from './cyrrency-exchange.service';
import { CourseExchangeModel } from './models/currency-exchange.model';

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

    let topicId =
      user?.tg_topic_id ||
      (await this.telegramBot.createAndSaveTopic(body.user));

    try {
      await this.telegramBot.sendMessageToTopic(claimMessage, topicId);
    } catch (err) {
      topicId = await this.telegramBot.createAndSaveTopic(body.user);
      await this.telegramBot.sendMessageToTopic(claimMessage, topicId);
    }
    await this.telegramBot.sendMessageToUser(body.user.tgUserId, claimMessage);
    return 200;
  }

  @Get('rub-currency/:id')
  public async getRubCurrency(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CourseExchangeModel> {
    return await this.currencyExchangeService.findCurrencyToRub(id);
  }
}
