import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: DataBaseService) {}

  async getByEmail(email: string) {
    const user = await this.db.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async create({ name, email, password }: CreateUserDto) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return this.db.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });
  }
}
