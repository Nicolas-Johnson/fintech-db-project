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
import { TimetableService } from './timetable.service';
import { UpdateTimeTableDto } from './dto/update-timetable.dto';
import { CreateTimeTableDto } from './dto/create-timetable.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('timetable')
export class TimetableController {
  constructor(private timeTableService: TimetableService) {}

  @UseGuards(AuthGuard)
  @Get()
  read() {
    return this.timeTableService.list();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  show(@Param('id') id: number) {
    return this.timeTableService.getOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateTimeTableDto) {
    return this.timeTableService.update(id, data);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() data: CreateTimeTableDto) {
    return this.timeTableService.create(data);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.timeTableService.delete(id);
  }
}
