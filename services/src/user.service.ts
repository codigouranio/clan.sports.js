import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from './user.entity';
import { InsertResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async test(): Promise<InsertResult> {
    let resp: InsertResult = await this.userRepository.insert({
      username: "hola", 
      password: "hola", 
      firstName: "hola", 
      lastName: "hola"
    });
    return resp;
  }

  async test2(): Promise<User[]> {
    let resp: User[] = await this.userRepository.find();
    return resp;
  }
}
