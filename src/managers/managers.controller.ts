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
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { ManagersService } from './managers.service';

@Controller('managers')
export class ManagersController {
  constructor(private managerServices: ManagersService) {}

  @UseGuards(AuthGuard)
  @Get()
  list() {
    return this.managerServices.list();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  show(@Param('id') id: number) {
    return this.managerServices.getOne(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() manager: CreateManagerDto) {
    return this.managerServices.create(manager);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() manager: UpdateManagerDto) {
    return this.managerServices.update(id, manager);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.managerServices.delete(id);
  }
}
