// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, // Внедряем репозиторий
  ) {}

    // Метод для поиска пользователя по email
    async findOneByEmail(email: string): Promise<User | undefined> {
        const users = await this.userRepository.findBy({ email }); // Используем findBy
        return users[0] ?? undefined; // Возвращаем первую запись или undefined
    }

    // src/users/users.service.ts
    async findAll(): Promise<User[]> {
        return await this.userRepository.find(); // Получаем всех пользователей из таблицы
    }
    // src/users/users.service.ts
    async findOneById(id: number): Promise<User | undefined> {
        const user = await this.userRepository.findOne({ where: { id_user: id } }); // Находим пользователя по ID
        return user ?? undefined;
    }
    // Метод для создания нового пользователя
    async createUser(email: string, password: string): Promise<User> {
        const newUser = this.userRepository.create({ email, password, op: 0 }); // Устанавливаем op = 0
        return await this.userRepository.save(newUser); // Сохраняем пользователя
    }
}