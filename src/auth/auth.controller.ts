import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private autService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Post('login')
  async login(@Body() login: LoginDto) {
    return this.autService.login(login);
  }
}
