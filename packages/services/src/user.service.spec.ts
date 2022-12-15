import { ConsoleLogger, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { User } from './user.entity';
import { UserModule } from './user.module';
import { UserService } from './user.service';

describe.only('Test User Service', () => {
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
        UserModule,
      ],
      controllers: [],
      providers: [],
    }).compile();

    app = module.createNestApplication();

    await app.init();

    userService = module.get<UserService>(UserService);
  });

  it('User Service', async () => {
    expect(userService).toBeDefined();

    const user1: User = {
      username: 'pepe',
      firstName: 'Jose',
      lastName: 'Bernal',
      email: 'pepe@micasa.mx',
      isActive: true,
    };
    const user2: User = await userService.addUser(user1);

    expect(user2.id).toBeDefined();
    expect(user2.username).toBe(user1.username);

    const user3 = await userService.findOne(user2.id);
    expect(user3.id).toBe(user2.id);

    user3.username = 'manolo';
    const resp = await userService.updateUser(user2.id, user3);
    expect(resp.affected).toBeGreaterThan(0);

    const user5 = await userService.findOne(user2.id);
    expect(user1.username).not.toEqual(user5.username);
  });
});
