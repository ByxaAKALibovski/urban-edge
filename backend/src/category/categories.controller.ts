// src/categories/categories.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from '../guards/admin.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const storage = diskStorage({
    destination: './uploads', // Путь к папке для сохранения файлов
    filename: (req, file, cb) => {
      const randomName = Array(32)
        .fill(null)
        .map(() => (Math.round(Math.random() * 16)).toString(16))
        .join('');
      cb(null, `${randomName}${extname(file.originalname)}`); // Генерируем случайное имя файла
    },
});

@Controller('category')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // 1) Получение всех категорий (открытый маршрут)
  @Get()
  async findAll() {
    return await this.categoriesService.findAll(); // Возвращаем все категории
  }

  // 2) Редактирование категории (только для администраторов)
  @Put(':id')
  @UseGuards(AuthGuard('jwt'), AdminGuard) // Защищаем маршрут для администраторов
  @UseInterceptors(FileInterceptor('img_category')) // Обработка файла
  async update(
    @Param('id') id: number,
    @Body('title') title: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const img_category = file ? file.path : null; // Если файл загружен, используем его путь
    return await this.categoriesService.update(id, title, img_category ?? ""); // Обновляем категорию
  }

  // 3) Удаление категории (только для администраторов)
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), AdminGuard) // Защищаем маршрут для администраторов
  async remove(@Param('id') id: number) {
    return await this.categoriesService.remove(id); // Удаляем категорию
  }

  // 4) Создание новой категории (только для администраторов)
  @Post()
  @UseGuards(AuthGuard('jwt'), AdminGuard) // Защищаем маршрут для администраторов
  @UseInterceptors(FileInterceptor('img_category', { storage })) // Обработка файла
  async create(
    @Body('title') title: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const img_category = file ? file.path : null;
    return await this.categoriesService.create(title, img_category ?? "");
  }
}