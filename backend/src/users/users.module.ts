// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Регистрируем сущность User
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService], // Экспортируем сервис для использования в других модулях
})
export class UsersModule {}