import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { PrismaModule } from './prisma/prisma.module';
import { TestModule } from './test/test.module';


@Module({
  imports: [UsersModule, AuthModule, PrismaModule, TestModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
