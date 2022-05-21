import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @UseGuards(AuthGuard)
  @Get()
  read() {
    return this.servicesService.list();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  show(@Param('id') id: number) {
    return this.servicesService.getOne(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() servico: CreateServiceDto) {
    return this.servicesService.create(servico);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() servico: UpdateServiceDto) {
    return this.servicesService.update(id, servico);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.servicesService.delete(id);
  }
}
