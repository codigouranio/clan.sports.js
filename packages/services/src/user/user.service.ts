import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { FindOptionsWhere, Repository, UpdateResult } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.repo.find({});
  }

  async create(newUser: CreateUserDto): Promise<User> {
    const resp: User = await this.repo.save(newUser);
    return resp;
  }

  async update(userId: number, updateUser: User) {
    const user = await this.repo.findOneBy({ id: userId });
    if (!user) return;
    const resp: UpdateResult = await this.repo.update(
      { id: userId },
      updateUser,
    );
    return resp;
  }

  async remove(userId: number) {
    const users: User[] = await this.repo.findBy({ id: userId });
    if (!users) return;
    const resp = await this.repo.remove(users);
    return resp;
  }

  async findOne(userId: number) {
    return this.repo.findOne({ where: { id: userId } });
  }

  async findOneBy(where: FindOptionsWhere<User>) {
    return this.repo.findOne({ where });
  }
}
