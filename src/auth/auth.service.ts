import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.getByEmail(email);

    if (!user) {
      throw new BadRequestException('Usuario ou senha inválido.');
    }

    const pswIsCorrect = await bcrypt.compare(password, user.password);

    if(!pswIsCorrect) {
      throw new BadRequestException('Usuario ou senha inválido.');
    }

    return {
      success: true,
    };
  }
}
