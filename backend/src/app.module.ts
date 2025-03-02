import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Тип базы данных (MySQL)
      host: 'localhost', // Адрес сервера MySQL
      port: 3306, // Порт MySQL (по умолчанию 3306)
      username: 'root', // Имя пользователя MySQL
      password: '', // Пароль MySQL
      database: 'urbanedge', // Название базы данных
      entities: [User], // Пути к моделям
      synchronize: false, // Автоматическое создание таблиц (не используйте в production)
      logging: false, // Включение логирования запросов
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
