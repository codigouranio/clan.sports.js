import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager, UpdateResult, Entity } from 'typeorm';
import { User } from './user.entity';
import { InsertResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async addUser(newUser: CreateUserDto): Promise<User>  {
    const user = await this.repo.findOneBy({ username: newUser.username });
    if (user) return;
    const addedUser = await this.repo.save(newUser);
    return addedUser;
  }

  async updateUser(userId: number, updateUser: User) {
    // const user: User = await this.repo.findOneBy({ id: userId });
    // if (!user) return;
    const resp: UpdateResult = await this.repo.update({ id: userId }, updateUser);
    return resp;
  }

  async removeUser(userId: number) {
    const users: User[] = await this.repo.findBy({ id: userId });
    if (!users) return;
    const resp = await this.repo.remove(users);
    return resp;
  }

  async findOne(userId: number): Promise<User> {
    return this.repo.findOne({ where: { id: userId } });
  }

  async test(): Promise<InsertResult> {
    let resp: InsertResult = await this.repo.insert({
      username: "hola", 
      password: "hola", 
      firstName: "hola", 
      lastName: "hola"
    });
    return resp;
  }

  async test2(): Promise<User[]> {
    let resp: User[] = await this.repo.find();
    return resp;
  }
}
