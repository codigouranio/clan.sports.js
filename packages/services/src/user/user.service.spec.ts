import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { UserService } from './user.service';

describe.only('Test User Service', () => {
  let app: INestApplication;
  let userService: UserService;
  let userRepository: Repository<User>;

  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        UserService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
            findOne: jest.fn(),
            findOneBy: jest.fn(),
          },
        },
      ],
    }).compile();

    app = module.createNestApplication();

    await app.init();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  it('Should be defined', async () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('create', () => {
    const userParams: User = {
      username: 'pepe',
      email: 'pepe@micasa.mx',
      passwordHash: '123456',
    };

    it('Should call userRepository.save with correct params', async () => {
      await userService.create(userParams);

      expect(userRepository.save).toHaveBeenCalledWith(userParams);
    });

    it('Should return the created user', async () => {
      jest.spyOn(userRepository, 'save').mockResolvedValue(userParams);

      const user = await userService.create(userParams);

      expect(user).toEqual(userParams);
    });
  });

  describe('findAll', () => {
    it('Should call userRepository.find', async () => {
      await userService.findAll();

      expect(userRepository.find).toHaveBeenCalled();
    });

    it('Should return an array of users', async () => {
      const users: User[] = [
        {
          username: 'pepe',
          email: 'a@a.com',
          passwordHash: '123456',
        },
      ];
      jest.spyOn(userRepository, 'find').mockResolvedValue(users);

      const result = await userService.findAll();

      expect(result).toEqual(users);
    });
  });

  describe('findOne', () => {
    it('Should call userRepository.findOne with correct params', async () => {
      const id = 1;
      await userService.findOne(id);

      expect(userRepository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('Should return a user', async () => {
      const id = 1;
      const user: User = {
        id,
        username: 'pepe',
        email: 'jhon@doe.com',
        passwordHash: '123456',
      };
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(user);

      const result = await userService.findOne(id);

      expect(result).toEqual(user);
    });

    it('Should return null if user is not found', async () => {
      const id = 1;
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);

      const result = await userService.findOne(id);

      expect(result).toBeNull();
    });
  });
});
