import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { UpdateTimeTableDto } from './dto/update-timetable.dto';
import { CreateTimeTableDto } from './dto/create-timetable.dto';

@Controller('timetable')
export class TimetableController {
  constructor(private timeTableService: TimetableService) {}

  @Get()
  read() {
    return this.timeTableService.list();
  }

  @Get(':id')
  show(@Param('id') id: number) {
    return this.timeTableService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateTimeTableDto) {
    return this.timeTableService.update(id, data);
  }

  @Post()
  create(@Body() data: CreateTimeTableDto) {
    return this.timeTableService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.timeTableService.delete(id);
  }
}
