import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.getByEmail(email);

    if (!user) {
      throw new BadRequestException('Usuario ou senha inválido.');
    }

    const pswIsCorrect = await bcrypt.compare(password, user.password);

    if (!pswIsCorrect) {
      throw new BadRequestException('Usuario ou senha inválido.');
    }

    const accessToken = this.jwtService.sign({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    delete user.password;

    return {
      user,
      accessToken,
    };
  }
}
