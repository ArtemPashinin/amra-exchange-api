import { Injectable, OnModuleInit } from '@nestjs/common';
import { Composer, Context, InlineKeyboard } from 'grammy';
import { TelegramBot } from '../bot.service';
import { UserService } from 'src/user/user.service';
import { ChatType } from '../enums/chat-types.enum';
import { createWelcomeMessage } from '../utils/create-welcome-message';
import { validateWorkTime } from '../utils/validate-work-time';

@Injectable()
export class UserComposer implements OnModuleInit {
  private readonly composer = new Composer<Context>();
  private openWebAppButton: InlineKeyboard;

  constructor(
    private readonly telegramBot: TelegramBot,
    private readonly userService: UserService,
  ) {}

  async onModuleInit() {
    this.openWebAppButton = new InlineKeyboard().webApp(
      'Обменять валюту',
      this.telegramBot.getWebAppInfo(),
    );
    this.registerHandlers();
    this.telegramBot.getBot().chatType(ChatType.PRIVATE).use(this.composer);
  }

  private registerHandlers(): void {
    this.composer.command('start', (ctx) => this.start(ctx));
    this.composer.on('message', (ctx) => this.copyMessageToTopic(ctx));
  }

  private async start(ctx: Context): Promise<void> {
    const { id: userId, username: userName } = ctx.from;
    await this.userService.createAndUpdateOne({
      tg_user_id: userId,
      tg_username: userName,
    });
    await ctx.reply(createWelcomeMessage(ctx.from.first_name || userName), {
      reply_markup: this.openWebAppButton,
    });
    await ctx.deleteMessage();
  }

  private async copyMessageToTopic(ctx: Context): Promise<void> {
    const { id: userId, username: userName, first_name: firstName } = ctx.from;
    const { message_id: messageId } = ctx.message;
    let user = await this.userService.findOne(userId);

    if (!user || !user.tg_topic_id) {
      const topic = await this.telegramBot.createTopic(firstName);
      const { message_thread_id: messageThreadId } = topic;

      user = await this.userService.createAndUpdateOne({
        tg_user_id: userId,
        tg_username: userName,
        tg_topic_id: messageThreadId,
      });
    }

    try {
      await ctx.api.copyMessage(
        this.telegramBot.getMainGroupId(),
        userId,
        messageId,
        {
          message_thread_id: user.tg_topic_id,
        },
      );
    } catch (err) {
      const topic = await this.telegramBot.createTopic(firstName);
      const { message_thread_id: messageThreadId } = topic;
      await this.userService.updateTopicId(userId, messageThreadId);
      await ctx.api.copyMessage(
        this.telegramBot.getMainGroupId(),
        userId,
        messageId,
        {
          message_thread_id: messageThreadId,
        },
      );
    }

    if (!validateWorkTime()) {
      setTimeout(async () => {
        await ctx.reply(`🕙 Working hours: 10:00-19:00 🤝

Спасибо за ваше обращение!  В настоящее время мы не работаем. Наши часы работы с 10:00 до 19:00. Мы обязательно свяжемся с вами, как только будем доступны. Спасибо, что выбрали нас! 🙌

Thank you for your inquiry! We are currently unavailable. Our working hours are from 🕙 10:00 AM to 7:00 PM. We will get back to you as soon as possible. Thank you for choosing us! 🙌

💫😴`);
      }, 5);
    }
  }
}
