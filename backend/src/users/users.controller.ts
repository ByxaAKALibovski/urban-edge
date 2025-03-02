// users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service'; // Импортируем сервис

@Controller('users') // Базовый маршрут /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // Внедряем сервис

  // Обработка GET-запроса к /users
  @Get()
  async findAll() {
    return await this.usersService.findAll(); // Вызываем метод сервиса
  }
}