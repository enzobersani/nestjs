import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { PrismaService } from 'src/database/PrismaService';
import { CustomException } from '../exceptions/custom-exception';
import { CustomExceptionFilter } from 'src/exceptions/custom-exception-filter';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService],
  exports: []
})
export class BookModule {}
