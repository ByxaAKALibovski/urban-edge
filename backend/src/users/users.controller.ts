// src/users/users.controller.ts
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from '../guards/admin.guard'; // Гвард для проверки прав администратора

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  // Маршрут для получения всех пользователей (только для администраторов)
  @Get()
  @UseGuards(AuthGuard('jwt'), AdminGuard) // Защищаем маршрут для администраторов
  async findAll() {
    return await this.usersService.findAll(); // Возвращаем всех пользователей
  }

  // Маршрут для получения пользователя по ID (только для администраторов)
  @Get(':id')
  @UseGuards(AuthGuard('jwt'), AdminGuard) // Защищаем маршрут для администраторов
  async findOne(@Param('id') id: number) {
    return await this.usersService.findOneById(id); // Возвращаем пользователя по ID
  }
}