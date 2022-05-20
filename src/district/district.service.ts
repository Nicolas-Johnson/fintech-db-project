import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(private db: DataBaseService) {}

  async list() {
    return this.db.district.findMany();
  }

  async getOne(id: number) {
    await this.getId(id);
    const district = await this.db.district.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!district) {
      throw new NotFoundException('ID do Bairro invalido!');
    }

    return district;
  }
  async create(bairro: CreateDistrictDto) {
    return this.db.district.create({
      data: bairro,
    });
  }

  async update(id: number, bairro: UpdateDistrictDto) {
    await this.getOne(id);
    return this.db.district.update({
      where: {
        id: Number(id),
      },
      data: bairro,
    });
  }

  async delete(id: number) {
    await this.getOne(id);
    return this.db.district.delete({
      where: {
        id: Number(id),
      },
    });
  }

  getId(id: number) {
    id = Number(id);

    if (isNaN(id)) {
      throw new BadRequestException('ID invalido');
    }
    return id;
  }
}
