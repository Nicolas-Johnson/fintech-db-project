import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Controller('district')
export class DistrictController {
  constructor(private districtService: DistrictService) {}

  @Get()
  read() {
    return this.districtService.list();
  }

  @Get(':id')
  show(@Param('id') id: number) {
    return this.districtService.getOne(id);
  }

  @Post()
  create(@Body() bairro: CreateDistrictDto) {
    return this.districtService.create(bairro);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() bairro: UpdateDistrictDto) {
    return this.districtService.update(id, bairro);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.districtService.delete(id);
  }
}
