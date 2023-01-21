import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TestModule } from './test/test.module';
import { QuestionModule } from './question/question.module';
import { DoctorModule } from './doctor/doctor.module';
import { AnswerModule } from './answer/answer.module';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { SuggestionModule } from './suggestion/suggestion.module';
import { AnalysModule } from './analys/analys.module';

@Module({
<<<<<<< HEAD
  imports: [
    AuthModule,
    PrismaModule,
    TestModule,
    QuestionModule,
    DoctorModule,
    AnswerModule,
    ChatGptModule,
  ],
=======
  imports: [AuthModule, PrismaModule, TestModule, QuestionModule, DoctorModule, AnswerModule, ChatGptModule, SuggestionModule, AnalysModule],
>>>>>>> 1c5a91d7b9fc96061ad8c6cf45c844f282dc536d
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
