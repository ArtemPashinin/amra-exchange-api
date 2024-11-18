import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { GrammyError } from 'grammy';
import { TelegramBot } from './bot/bot.service';
import { Request, Response } from 'express';

@Catch(HttpException, GrammyError)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly telegramBot: TelegramBot) {}
  catch(exception: any, host: ArgumentsHost) {
    if (exception instanceof HttpException) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus();

      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
    this.telegramBot.sendErrorLog(exception);
  }
}
