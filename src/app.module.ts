import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';
import { TimeModule } from './modules/times/times.module';

@Module({
  imports: [PrismaModule, TimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 