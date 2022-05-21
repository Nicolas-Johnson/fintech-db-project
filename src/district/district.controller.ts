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
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Controller('district')
export class DistrictController {
  constructor(private districtService: DistrictService) {}

  @UseGuards(AuthGuard)
  @Get()
  read() {
    return this.districtService.list();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  show(@Param('id') id: number) {
    return this.districtService.getOne(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() bairro: CreateDistrictDto) {
    return this.districtService.create(bairro);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() bairro: UpdateDistrictDto) {
    return this.districtService.update(id, bairro);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.districtService.delete(id);
  }
}
