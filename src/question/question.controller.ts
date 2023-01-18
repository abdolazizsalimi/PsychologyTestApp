import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
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


@Get('readquestions')
@ApiBody({type: ReadQuestionInput})
@ApiResponse({ status: 200 })
async readQuestions (@Body() input : ReadQuestionInput){
    this.qestionservice.readQuestion(input);
}



}
