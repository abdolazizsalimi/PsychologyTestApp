import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { TestModule } from './test/test.module'
import { QuestionModule } from './question/question.module'
import { DoctorModule } from './doctor/doctor.module'
import { AnswerModule } from './answer/answer.module'
import { ChatGptModule } from './chat-gpt/chat-gpt.module'
import { SuggestionModule } from './suggestion/suggestion.module'
import { AnalysModule } from './analys/analys.module'

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    TestModule,
    QuestionModule,
    DoctorModule,
    AnswerModule,
    ChatGptModule,
    SuggestionModule,
    AnalysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
