import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  exports: [TypeOrmModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
