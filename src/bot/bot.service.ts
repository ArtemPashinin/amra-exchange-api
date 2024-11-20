import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Bot } from 'grammy';
import { ForumTopic, WebAppInfo } from 'grammy/types';
import { ICreateForumTopicDto } from './interfaces/dto/create-forum-topic.dto';
import { UserService } from 'src/user/user.service';

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
    userName: string;
    tgUserId: number;
  }) {
    const { message_thread_id: topicId } = await this.createTopic(
      user.userName,
    );

    const userExists = await this.userService.findOne(user.tgUserId);
    if (!userExists) {
      await this.userService.createAndUpdateOne({
        tg_user_id: user.tgUserId,
        tg_username: user.userName,
        tg_topic_id: topicId,
      });
    } else {
      await this.userService.createAndUpdateOne({
        tg_user_id: user.tgUserId,
        tg_topic_id: topicId,
      });
    }

    return topicId;
  }

  public async sendErrorLog(error): Promise<void> {
    await this.bot.api.sendMessage(this.errorLogChatId, JSON.stringify(error));
  }
}
