import { Injectable, OnModuleInit } from '@nestjs/common';
import { Composer, Context } from 'grammy';
import { TelegramBot } from '../bot.service';
import { UserService } from 'src/user/user.service';
import { ChatType } from '../enums/chat-types.enum';
import {
  isMessageMainTopic,
  isMessageTopic,
} from '../filters/is-message-main-topic';
import { isUserHasPermissions } from '../filters/is-user-has-premissions';

@Injectable()
export class AdminComposer implements OnModuleInit {
  private readonly composer = new Composer<Context>();

  constructor(
    private readonly telegramBot: TelegramBot,
    private readonly userService: UserService,
  ) {}

  async onModuleInit() {
    this.registerHandlers();
    this.telegramBot
      .getBot()
      .chatType(ChatType.SUPERGROUP)
      .filter((ctx) => !ctx.from.is_bot)
      .use(this.composer);
  }

  private registerHandlers(): void {
    this.composer
      .filter(isMessageMainTopic)
      .filter(isUserHasPermissions)
      .command('mailing', (ctx) => {
        this.mailing(ctx);
      });
    this.composer.filter(isMessageTopic).on('message', (ctx) => {
      this.copyMessageToUser(ctx);
    });
  }

  private async mailing(ctx: Context) {
    console.log(await ctx.getAuthor());
  }

  private async copyMessageToUser(ctx: Context): Promise<void> {
    const { message_thread_id: topicId, message_id: messageId } = ctx.message;
    const user = await this.userService.findByTopicId(topicId);
    await ctx.api.copyMessage(
      user.tg_user_id,
      this.telegramBot.getMainGroupId(),
      messageId,
    );
  }
}
