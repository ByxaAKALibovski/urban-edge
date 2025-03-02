// src/auth/local.strategy.ts
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Используем email вместо username
  }

  // Метод для проверки учетных данных
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password); // Проверяем данные
    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль'); // Если данные неверны, выбрасываем ошибку
    }
    return user; // Возвращаем пользователя
  }
}