// src/categories/categories.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>, // Внедряем репозиторий
  ) {}

  // Метод для получения всех категорий
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find(); // Получаем все категории из таблицы
  }

  // Метод для получения категории по ID
  async findOne(id: number): Promise<Category | undefined> {
    const category = await this.categoryRepository.findOne({ where: { id_category: id } }); // Находим категорию по ID
    return category ?? undefined;
  }

  // Метод для создания новой категории
  async create(title: string, img_category: string): Promise<Category> {
    const newCategory = this.categoryRepository.create({ title, img_category }); // Создаём новую категорию
    return await this.categoryRepository.save(newCategory); // Сохраняем её
  }

  // Метод для обновления категории
  async update(id: number, title: string, img_category: string): Promise<Category | undefined> {
    const category = await this.findOne(id); // Находим категорию по ID
    if (!category) return undefined; // Если категория не найдена, возвращаем undefined

    category.title = title; // Обновляем название
    category.img_category = img_category; // Обновляем изображение
    return await this.categoryRepository.save(category); // Сохраняем изменения
  }

  // Метод для удаления категории
  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete({ id_category: id }); // Удаляем категорию по ID
  }
}