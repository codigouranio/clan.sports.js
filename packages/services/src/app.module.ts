import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserModule } from './user.module';
import { UserService } from './user.service';

@Module({
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
