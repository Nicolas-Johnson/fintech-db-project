import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';

@Injectable()
export class ManagersService {
  constructor(private db: DataBaseService) {}

  async list() {
    return this.db.manager.findMany();
  }

  async getOne(id: number) {
    await this.getId(id);
    const manager = await this.db.manager.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!manager) {
      throw new NotFoundException('ID do gerente invalido"');
    }

    return manager;
  }
  async create({ name, lastName, employeeNumber }: CreateManagerDto) {
    //crie um funcionario antes de criar o gerente
    //retorne o id do usuario criado para salvar no campo employeeNumber
    return this.db.manager.create({
      data: {
        name,
        lastName,
        employees: {
          connect: {
            id: Number(employeeNumber),
          },
        },
      },
    });
  }

  async update(
    id: number,
    { name, lastName, employeeNumber }: UpdateManagerDto,
  ) {
    await this.getOne(id);
    return this.db.manager.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        lastName,
        employees: {
          connect: {
            id: Number(employeeNumber),
          },
        },
      },
    });
  }
  async delete(id: number) {
    await this.getOne(id);
    return this.db.manager.delete({
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
