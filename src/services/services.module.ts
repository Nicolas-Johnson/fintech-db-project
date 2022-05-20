import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/database/database.module';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  imports: [DataBaseModule],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
