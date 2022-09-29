import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/user';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);

    let app: INestApplication = module.createNestApplication();
    let repo: Repository<User> = module.get('UserRepository');
    const conn = repo.manager.connection;
    await conn.synchronize(true);
    await app.init();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getTest("hola")).toHaveProperty("msg", "Hello World! hola");
    });
  });
});
