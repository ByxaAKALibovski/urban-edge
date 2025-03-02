// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // Внедряем UsersService
    private jwtService: JwtService,
  ) {}

  // Метод для проверки учетных данных пользователя
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email); // Ищем пользователя по email
    if (user && (await bcrypt.compare(password, user.password))) { // Сравниваем пароль
      const { password, ...result } = user; // Убираем хэш пароля из ответа
      return result;
    }
    return null;
  }

  // Метод для создания JWT токена
  async login(user: any) {
    const payload = { email: user.email, sub: user.id_user, op: user.op }; // Payload для токена
    return {
      access_token: this.jwtService.sign(payload), // Создаем токен
    };
  }

  // Метод для регистрации нового пользователя
  async registerUser(email: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10); // Хэшируем пароль
    const user = await this.usersService.createUser(email, hashedPassword); // Создаём пользователя
    return user;
  }
}