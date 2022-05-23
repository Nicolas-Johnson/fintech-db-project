import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RulesModule } from './rules/rules.module';
import { TimetableModule } from './timetable/timetable.module';
import { ServicesModule } from './services/services.module';
import { DistrictModule } from './district/district.module';
import { ManagersModule } from './managers/managers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    RulesModule,
    TimetableModule,
    ServicesModule,
    DistrictModule,
    ManagersModule,
    UsersModule,
    AuthModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
