import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { UpdateTimeTableDto } from './dto/update-timetable.dto';
import { CreateTimeTableDto } from './dto/create-timetable.dto';

@Injectable()
export class TimetableService {
  constructor(private db: DataBaseService) {}

  validateCreation(data: CreateTimeTableDto) {
    if (!data.tipe) {
      throw new BadRequestException('Campo Tipo é Obrigatorio!');
    }
    if (!data.time) {
      throw new BadRequestException('Campo Tempo é Obrigatorio!');
    }

    return data;
  }

  async list() {
    return this.db.timeTable.findMany();
  }

  async getOne(id: number) {
    await this.getId(id);
    const time = await this.db.timeTable.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!time) {
      throw new NotFoundException('Horario não Existe!');
    }

    return time;
  }

  async update(id: number, data: UpdateTimeTableDto) {
    await this.getOne(id);
    if (!data.tipe) {
      throw new BadRequestException('Tipo obriatorio!');
    }
    if (!data.time) {
      throw new BadRequestException('Tempo obrigatorio!');
    }
    return this.db.timeTable.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  async create(data: CreateTimeTableDto) {
    await this.validateCreation(data);
    return this.db.timeTable.create({
      data: data,
    });
  }

  async delete(id: number) {
    await this.getOne(id);
    return this.db.timeTable.delete({
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
