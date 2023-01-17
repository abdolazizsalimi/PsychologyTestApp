import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateQuestionInput } from './dto/creat-questions.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private qestionservice:QuestionService){}



@Post('creatquestions')
@ApiBody({type: CreateQuestionInput})
@ApiResponse({ status: 200 })
async Questions (@Body() input : CreateQuestionInput){
    this.qestionservice.generateQuestion(input);
}
}
