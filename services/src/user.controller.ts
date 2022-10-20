import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly service: UserService) {}

    @Post()
    addUser(@Body() createUser: CreateUserDto) {

    }

    @Get()
    getUser() {

    }

    @Delete()
    removeUser() {

    }

    @Put()
    updateUser() {

    }

    @Post()
    validateUsername() {

    }

    @Post()
    createPassword() {

    }

    @Delete() 
    deletePassword() {

    }

    @Post()
    activateUser() {

    }
}
