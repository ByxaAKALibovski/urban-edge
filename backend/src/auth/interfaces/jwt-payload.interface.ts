// src/auth/interfaces/jwt-payload.interface.ts
export interface JwtPayload {
    email: string; // Email пользователя
    sub: number;   // ID пользователя (например, id_user)
    op: number;    // Права пользователя (оп = 0 для обычных пользователей, оп = 1 для администраторов)
}