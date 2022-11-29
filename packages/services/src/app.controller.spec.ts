import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
import { UserService } from './user.service';

describe('AppController', () => {
  let app: INestApplication;  
  let appController: AppController;
  let userService: UserService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: () => ({
            type: 'better-sqlite3',
            name: 'connection',
            database: __dirname + '/../mydb.sql',
            dropSchema: true,
            synchronize: true,
            migrations: [__dirname + '/db/*.ts'],
            entities: [__dirname + '/*.entity.ts'],
            migrationsTableName: 'migrations_typeorm',
            migrationsRun: true,
            cli: {
              entitiesDir: './',
              migrationsDir: './db',
            },
            autoLoadEntities: true,            
          }),
          dataSourceFactory: async (options) => {
            const dataSource = await new DataSource(options).initialize();
            return dataSource;
          },          
        }),
        UserModule
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

      // let resp = await userService.test();
      // console.log(resp);
      // let resp2 = await userService.test2();
      // console.log(resp2);
    });

    it ('Test App controller', async () => {
      expect(appController.getTest("hola")).toHaveProperty("msg", "Hello World! hola");
    });
  });
});
