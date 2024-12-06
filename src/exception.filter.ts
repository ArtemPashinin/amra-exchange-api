import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GrammyError } from 'grammy';
import { TelegramBot } from './bot/bot.service';
import { Request, Response } from 'express';

@Catch(HttpException, GrammyError)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly telegramBot: TelegramBot) {}
  catch(exception: HttpException | GrammyError, host: ArgumentsHost) {
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
    if (exception instanceof GrammyError) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      response.status(HttpStatus.FORBIDDEN).json({
        statusCode: HttpStatus.FORBIDDEN,
        timestamp: new Date().toISOString(),
      });
    }
    this.telegramBot.sendErrorLog(exception);
  }
}
