import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  read() {
    return this.servicesService.list();
  }

  @Get(':id')
  show(@Param('id') id: number) {
    return this.servicesService.getOne(id);
  }

  @Post()
  create(@Body() servico: CreateServiceDto) {
    return this.servicesService.create(servico);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() servico: UpdateServiceDto) {
    return this.servicesService.update(id, servico);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.servicesService.delete(id);
  }
}
