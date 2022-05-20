import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/database/database.module';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';

@Module({
  imports: [DataBaseModule],
  controllers: [TimetableController],
  providers: [TimetableService],
})
export class TimetableModule {}
