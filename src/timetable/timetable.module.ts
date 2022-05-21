import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DataBaseModule } from 'src/database/database.module';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';

@Module({
  imports: [
    DataBaseModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      }),
    }),
  ],
  controllers: [TimetableController],
  providers: [TimetableService],
})
export class TimetableModule {}
