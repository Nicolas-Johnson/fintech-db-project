import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private uservService: UsersService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.uservService.create(user);
  }
}
