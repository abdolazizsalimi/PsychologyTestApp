import { registerAs } from '@nestjs/config';
import { secrets } from 'docker-secret';


export default registerAs('jwt', () => ({
  JWT_SECRET: secrets.jwt_secret || process.env.JWT_SECRET,
}));
