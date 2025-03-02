// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service'; // Импортируем сервис
import { UsersController } from './users.controller'; // Импортируем контроллер
import { User } from '../entities/user.entity'; // Импортируем модель

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Регистрация сущности
  controllers: [UsersController], // Регистрация контроллера
  providers: [UsersService], // Регистрация сервиса
})
export class UsersModule {}