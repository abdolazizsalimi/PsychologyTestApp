import { registerAs } from '@nestjs/config';
import { secrets } from 'docker-secret';

export default registerAs('database', () => ({
  DB_HOST: process.env.DATABASE_URL || 'localhost',
  DB_USER: secrets.db_admin || process.env.DB_ADMIN,
  DB_PASSWORD: secrets.db_admin_password || process.env.DB_ADMIN_PASSWORD,
}));
