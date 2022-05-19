import { Injectable } from '@nestjs/common';
import { CreateRulesDto } from './dto/rules.create.dto';
import { UpdateRulesDto } from './dto/rules.update.dto';

@Injectable()
export class RulesService {

  create(data: CreateRulesDto) {}
  list() {}
  getOne() {}
  update({ id, cargo  }: UpdateRulesDto) {}
  delete() {}
}
