import { registerAs } from '@nestjs/config';


export default registerAs('jwt', () => ({
//   JWT_SECRET: secrets.jwt_secret || process.env.JWT_SECRET,
}));
