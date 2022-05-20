import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private db: DataBaseService) {}

  async list() {
    return this.db.service.findMany();
  }
  async getOne(id: number) {
    await this.getId(id);
    const service = await this.db.service.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!service) {
      throw new NotFoundException('ID de serviço invalido!');
    }

    return service;
  }

  async create(serviço: CreateServiceDto) {
    return this.db.service.create({
      data: serviço,
    });
  }
  async update(id: number, servico: UpdateServiceDto) {
    await this.getOne(id);
    return this.db.service.update({
      where: {
        id: Number(id),
      },
      data: servico,
    });
  }
  async delete(id: number) {
    await this.getOne(id);
    return this.db.service.delete({
      where: {
        id: Number(id),
      },
    });
  }

  getId(id: number) {
    id = Number(id);

    if (isNaN(id)) {
      throw new BadGatewayException('ID invalido');
    }
    return id;
  }
}
