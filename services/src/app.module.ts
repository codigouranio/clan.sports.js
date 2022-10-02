import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserModule } from './user.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      name: 'connection',
      database: './mydb.sql',
      dropSchema: true,
      synchronize: true,
      migrations: ['src/db/*.ts'],
      entities: ['src/*.entity.ts'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/db',
      },
    }),
    UserModule
  ],
  exports: [TypeOrmModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log(dataSource);
  }  
}
