import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { ManagersService } from './managers.service';

@Controller('managers')
export class ManagersController {
  constructor(private managerServices: ManagersService) {}

  @Get()
  list() {
    return this.managerServices.list();
  }

  @Get(':id')
  show(@Param('id') id: number) {
    return this.managerServices.getOne(id);
  }

  @Post()
  create(@Body() manager: CreateManagerDto) {
    return this.managerServices.create(manager);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() manager: UpdateManagerDto) {
    return this.managerServices.update(id, manager);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.managerServices.delete(id);
  }
}
