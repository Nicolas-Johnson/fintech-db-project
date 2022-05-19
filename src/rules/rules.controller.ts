import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRulesDto } from './dto/rules.create.dto';
import { UpdateRulesDto } from './dto/rules.update.dto';
import { RulesService } from './rules.service';

@Controller('rules')
export class RulesController {
  constructor(private rulesService: RulesService) {}

  @Post()
  create(@Body('cargo') cargo: string) {
    return this.rulesService.create(cargo);
  }

  @Get()
  read() {
    return this.rulesService.list();
  }

  @Get(':id')
  show(@Param('id') id) {
    return this.rulesService.getOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cargo: string) {
    return this.rulesService.update(id, cargo);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rulesService.delete(id);
  }
}
