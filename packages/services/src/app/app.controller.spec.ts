import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

import { testDbConfig } from '../db/db.typeorm.config';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: INestApplication;
  let appController: AppController;
  let userService: UserService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: () => ({
            ...testDbConfig,
            autoLoadEntities: true,
          }),
          dataSourceFactory: async (options: DataSourceOptions) => {
            const dataSource = await new DataSource(options).initialize();
            return dataSource;
          },
        }),
        UserModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = module.createNestApplication();

    await app.init();

    appController = module.get<AppController>(AppController);
    userService = module.get<UserService>(UserService);
  });

  describe('root', () => {
    it('Test User repository', async () => {
      expect(appController).toBeDefined();
      expect(userService).toBeDefined();
    });

    it('Test App controller', async () => {
      expect(appController.getTest('hola')).toHaveProperty(
        'msg',
        'Hello World! hola',
      );
    });
  });
});
