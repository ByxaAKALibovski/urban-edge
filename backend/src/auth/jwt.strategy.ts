// src/auth/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your-secret-key', // Замените на ваш секретный ключ
    });
  }

  // Метод для проверки токена
  async validate(payload: JwtPayload) {
    const user = await this.usersService.findOneByEmail(payload.email); // Находим пользователя по email
    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }
    return { id_user: user.id_user, email: user.email, op: user.op }; // Возвращаем данные пользователя
  }
}