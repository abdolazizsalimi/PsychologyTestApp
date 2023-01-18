import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TestModule } from './test/test.module';
import { QuestionModule } from './question/question.module';
import { DoctorModule } from './doctor/doctor.module';
import { AnswerModule } from './answer/answer.module';


@Module({
  imports: [AuthModule, PrismaModule, TestModule, QuestionModule, DoctorModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
