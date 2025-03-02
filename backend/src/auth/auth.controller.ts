// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Маршрут для входа
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  /// Маршрут для регистрации
  @Post('register')
  async register(@Body(new ValidationPipe()) registerDto: RegisterDto) {
    const user = await this.authService.registerUser(registerDto.email, registerDto.password);
    return { message: 'Пользователь успешно зарегистрирован', user };
  }
}