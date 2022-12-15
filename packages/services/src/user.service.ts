import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Entity, EntityManager, Repository, UpdateResult } from 'typeorm';
import { InsertResult } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async addUser(newUser: CreateUserDto): Promise<User> {
    const user = await this.repo.findOneBy({ username: newUser.username });
    if (user) return;
    const resp: User = await this.repo.save(newUser);
    return resp;
  }

  async updateUser(userId: number, updateUser: User) {
    const user: User = await this.repo.findOneBy({ id: userId });
    if (!user) return;
    const resp: UpdateResult = await this.repo.update(
      { id: userId },
      updateUser,
    );
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
}
