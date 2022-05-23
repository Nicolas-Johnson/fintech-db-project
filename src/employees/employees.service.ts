import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly db: DataBaseService) {}

  async findAll() {
    return this.db.employee.findMany();
  }

  async findOne(id: number) {
    await this.getId(id);
    const employee = await this.db.employee.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!employee) {
      throw new NotFoundException('ID de Funcionario não existe!');
    }

    return employee;
  }

  async create({
    name,
    lastName,
    cpf,
    email,
    rule,
    timeTable,
    wage,
  }: CreateEmployeeDto) {
    return this.db.employee.create({
      data: {
        name,
        lastName,
        cpf,
        email,
        rules: {
          connect: {
            id: Number(rule),
          },
        },
        timetable: {
          connect: {
            id: Number(timeTable),
          },
        },
        wage: Number(wage),
      },
    });
  }

  async update(
    id: number,
    { name, lastName, email, cpf, rule, wage, timeTable }: UpdateEmployeeDto,
  ) {
    await this.findOne(id);
    return this.db.employee.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        lastName,
        email,
        cpf,
        rule: Number(rule),
        wage,
        timeTable: Number(timeTable),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.db.employee.delete({
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
