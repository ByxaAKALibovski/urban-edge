// src/categories/entities/category.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category') // Укажите имя существующей таблицы
export class Category {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true }) // Первичный ключ
  id_category: number;

  @Column({ type: 'varchar', length: 244 }) // Название категории
  title: string;

  @Column({ type: 'text' }) // Изображение категории
  img_category: string;
}