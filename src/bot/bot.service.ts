import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Bot } from 'grammy';
import { ForumTopic, WebAppInfo } from 'grammy/types';
import { ICreateForumTopicDto } from './interfaces/dto/create-forum-topic.dto';
import { UserService } from 'src/user/user.service';
import { ITgUserDto } from 'src/financial/interfaces/dto/user.dto';
import { UserModel } from 'src/user/models/user.model';
import { number } from 'joi';
import { validateWorkTime } from './utils/validate-work-time';

@Injectable()
export class TelegramBot {
  private bot: Bot;
  private mainGroupId: string | number;
  private errorLogChatId: string | number;
  private webAppInfo: WebAppInfo;

  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    this.mainGroupId = configService.get<number | string>('MAIN_GROUP');
    this.errorLogChatId = configService.get<number | string>(
      'ERROR_LOG_CHAT_ID',
    );
    this.webAppInfo = { url: configService.get<string>('WEBAPP_URL') };
    this.bot = new Bot(configService.get<string>('BOT_TOKEN'));
    this.bot.catch((error) => {
      this.bot.api.sendMessage(this.errorLogChatId, JSON.stringify(error));
    });
  }

  async onApplicationBootstrap() {
    this.bot.start();
  }

  public getBot(): Bot {
    return this.bot;
  }

  public getMainGroupId(): string | number {
    return this.mainGroupId;
  }

  public getWebAppInfo(): WebAppInfo {
    return this.webAppInfo;
  }

  public async sendMessageToUser(userId: number, text: string): Promise<void> {
    await this.bot.api.sendMessage(userId, text);
  }

  public async sendMessageToTopic(
    text: string,
    topicId: number,
  ): Promise<void> {
    await this.bot.api.sendMessage(this.mainGroupId, text, {
      message_thread_id: topicId,
    });
  }

  public async createTopic(topicName: string): Promise<ForumTopic> {
    return await this.bot.api.createForumTopic(this.mainGroupId, topicName);
  }

  public async createAndSaveTopic(user: {
    tg_username?: string;
    tg_user_id: number;
  }) {
    const { message_thread_id: topicId } = await this.createTopic(
      user.tg_username || user.tg_user_id.toString(),
    );

    const userExists = await this.userService.findOne(user.tg_user_id);
    if (!userExists) {
      await this.userService.createAndUpdateOne({
        tg_user_id: user.tg_user_id,
        tg_username: user.tg_username,
        tg_topic_id: topicId,
      });
    } else {
      await this.userService.createAndUpdateOne({
        tg_user_id: user.tg_user_id,
        tg_topic_id: topicId,
      });
    }

    return topicId;
  }

  public async sendUnworkTimeMessage(userId: string | number): Promise<void> {
    if (!validateWorkTime()) {
      setTimeout(async () => {
        await this.bot.api.sendMessage(
          userId,
          `🕙 Working hours: 10:00-19:00 🤝

        Спасибо за ваше обращение!  В настоящее время мы не работаем. Наши часы работы с 10:00 до 19:00. Мы обязательно свяжемся с вами, как только будем доступны. Спасибо, что выбрали нас! 🙌
        
        Thank you for your inquiry! We are currently unavailable. Our working hours are from 🕙 10:00 AM to 7:00 PM. We will get back to you as soon as possible. Thank you for choosing us! 🙌
        
        💫😴`,
        );
      }, 60);
    }
  }

  public async createClaim(user: UserModel, claimMessage: string) {
    let topicId = user?.tg_topic_id || (await this.createAndSaveTopic(user));

    try {
      await this.sendMessageToTopic(claimMessage, topicId);
    } catch (err) {
      topicId = await this.createAndSaveTopic(user);
      await this.sendMessageToTopic(claimMessage, topicId);
    }
    await this.sendMessageToUser(user.tg_user_id, claimMessage);
    if (!validateWorkTime()) {
    }
    await this.sendUnworkTimeMessage(user.tg_user_id)
    return 200;
  }

  public async sendErrorLog(error): Promise<void> {
    await this.bot.api.sendMessage(this.errorLogChatId, JSON.stringify(error));
  }
}
