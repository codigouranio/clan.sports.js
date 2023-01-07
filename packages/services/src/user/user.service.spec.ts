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
      password: '123456',
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
          password: '123456',
        },
      ];
      jest.spyOn(userRepository, 'find').mockResolvedValue(users);

      const result = await userService.findAll();

      expect(result).toEqual(users);
    });
  });
});
