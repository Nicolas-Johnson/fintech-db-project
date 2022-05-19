import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateRulesDto } from './dto/rules.create.dto';
import { UpdateRulesDto } from './dto/rules.update.dto';
import { RulesService } from './rules.service';

@Controller('rules')
export class RulesController {
  constructor(private rulesService: RulesService) {}

  @Post()
  create(@Body() category: CreateRulesDto) {
    return this.rulesService.create(category);
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
  update(@Param('id') id, @Body() category: UpdateRulesDto) {
    const { cargo } = category;
    return this.rulesService.update(id, cargo);
  }

  @Patch(':id')
  patch(@Param('id') id, @Body() category: UpdateRulesDto) {
    const { cargo } = category;
    return this.rulesService.update(id, cargo);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.rulesService.delete(id);
  }
}
