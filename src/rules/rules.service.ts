import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateRulesDto } from './dto/rules.create.dto';
import { UpdateRulesDto } from './dto/rules.update.dto';

@Injectable()
export class RulesService {
  constructor(private db: DataBaseService) {}

  validate(cargo: string) {
    if (!cargo) {
      throw new BadRequestException('Campo Cargo é obrigatorio!');
    }
    return cargo;
  }

  async list() {
    return this.db.rule.findMany();
  }

  async create(cargo: string) {
    await this.validate(cargo);
    return this.db.rule.create({
      data: {
        cargo,
      },
    });
  }

  async getOne(id: number) {
    const rule = await this.db.rule.findUnique({
      where: {
        id: this.getId(id),
      },
    });

    if (!rule) {
      throw new NotFoundException('Cargo nãoexiste!');
    }

    return rule;
  }

  async delete(id: number) {
    await this.getOne(id);

    return this.db.rule.delete({
      where: {
        id: this.getId(id),
      },
    });
  }

  async update(id: number, cargo: string) {
    await this.getOne(id);

    return this.db.rule.update({
      where: {
        id: this.getId(id),
      },
      data: this.validate(cargo),
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
