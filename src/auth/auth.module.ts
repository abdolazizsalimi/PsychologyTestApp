import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports:[PrismaModule],
  controllers: [AuthController],
  providers: [PrismaService , AuthService],
  
})
export class AuthModule {}
