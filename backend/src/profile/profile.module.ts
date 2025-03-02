// src/profile/profile.module.ts
import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';

@Module({
  controllers: [ProfileController], // Регистрируем контроллер
})
export class ProfileModule {}