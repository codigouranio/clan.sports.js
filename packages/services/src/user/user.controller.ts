import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

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
