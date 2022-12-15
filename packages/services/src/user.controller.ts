import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addUser(@Body() createUser: CreateUserDto) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getUser() {}

  @Delete()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeUser() {}

  @Put()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateUser() {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  validateUsername() {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createPassword() {}

  @Delete()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  deletePassword() {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  activateUser() {}
}
