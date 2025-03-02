import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { CategoriesModule } from './category/categories.module';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Тип базы данных (MySQL)
      host: 'localhost', // Адрес сервера MySQL
      port: 3306, // Порт MySQL (по умолчанию 3306)
      username: 'root', // Имя пользователя MySQL
      password: '', // Пароль MySQL
      database: 'urbanedge', // Название базы данных
      entities: [User, Category], // Пути к моделям
      synchronize: false, // Автоматическое создание таблиц (не используйте в production)
      logging: false, // Включение логирования запросов
    }),
    UsersModule,
    AuthModule,
    ProfileModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
