import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/database/database.module';
import { ManagersController } from './managers.controller';
import { ManagersService } from './managers.service';

@Module({
  imports: [DataBaseModule],
  controllers: [ManagersController],
  providers: [ManagersService],
})
export class ManagersModule {}
