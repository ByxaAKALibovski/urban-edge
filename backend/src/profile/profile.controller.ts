// src/profile/profile.controller.ts
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {
  @UseGuards(AuthGuard('jwt')) // Защищаем маршрут JWT
  @Get()
  getProfile(@Request() req) {
    return { message: 'Это ваш профиль', user: req.user }; // Возвращаем данные пользователя из токена
  }
}