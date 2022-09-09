import { Module } from '@nestjs/common';
import { TimeController } from './times.controller';
import { TimeService } from './times.service';
import { TimeRepository } from './repositories';

@Module({
    controllers: [TimeController],
    providers: [TimeRepository, TimeService],
})
export class TimeModule {}