import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BotController } from './bot.controller';
import { TelegramBot } from './bot.service';
import { UserComposer } from './composers/user.composer';
import { UserModule } from 'src/user/user.module';
import { AdminComposer } from './composers/admin.composer';

@Module({
  imports: [ConfigModule, UserModule],
  controllers: [BotController],
  providers: [TelegramBot, AdminComposer, UserComposer],
  exports: [TelegramBot],
})
export class BotModule {}
