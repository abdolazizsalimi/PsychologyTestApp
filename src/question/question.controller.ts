import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateQuestionInput } from './dto/creat-questions.dto';
import { ReadQuestionInput } from './dto/read-question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private qestionservice:QuestionService){}



@Post('creatquestions')
@ApiBody({type: CreateQuestionInput})
@ApiResponse({ status: 200 })
async createQuestions (@Body() input : CreateQuestionInput){
    this.qestionservice.generateQuestion(input);
}


@Post('readquestions')
@ApiQuery({type: ReadQuestionInput})
@ApiResponse({ status: 200 })
async readQuestions (@Query() input : ReadQuestionInput){
   return this.qestionservice.readQuestion(input);
}



}
