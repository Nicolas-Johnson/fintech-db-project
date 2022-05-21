import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DataBaseModule } from 'src/database/database.module';
import { ManagersController } from './managers.controller';
import { ManagersService } from './managers.service';

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
  controllers: [ManagersController],
  providers: [ManagersService],
})
export class ManagersModule {}
