import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
  } from '@nestjs/common';
  import { Response } from 'express';
import { CustomException } from './custom-exception';
  
  @Catch(CustomException)
  export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: CustomException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const status = exception.getStatus();
      const errorResponse = exception.getResponse() as { status: number; error: string };
  
      response.status(status).json({
        statusCode: status,
        message: errorResponse.error,
        timestamp: new Date().toISOString(),
        path: ctx.getRequest().url,
      });
    }
  }
  