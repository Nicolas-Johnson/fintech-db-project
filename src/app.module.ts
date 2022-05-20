import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RulesModule } from './rules/rules.module';
import { TimetableModule } from './timetable/timetable.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [RulesModule, TimetableModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
