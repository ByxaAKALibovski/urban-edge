// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Укажите имя существующей таблицы
export class User {
  @PrimaryGeneratedColumn() // Первичный ключ
  id_user: number;

  @Column({ type: 'varchar', length: 244 }) // Столбец email
  email: string;

  @Column({ type: 'text' }) // Столбец password
  password: string;

  @Column({ type: 'int' }) // Столбец op
  op: number;
}