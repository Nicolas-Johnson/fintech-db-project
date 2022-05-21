import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RulesService } from './rules.service';

@Controller('rules')
export class RulesController {
  constructor(private rulesService: RulesService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body('cargo') cargo: string) {
    return this.rulesService.create(cargo);
  }

  @UseGuards(AuthGuard)
  @Get()
  read() {
    return this.rulesService.list();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  show(@Param('id') id) {
    return this.rulesService.getOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() cargo: string) {
    return this.rulesService.update(id, cargo);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rulesService.delete(id);
  }
}
