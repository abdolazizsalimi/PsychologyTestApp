import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AnswerService } from './answer.service';
import { CreateAnswerInput } from './dto/create-answer.dto';
import { DeleteAnswerInput } from './dto/delet-answer.dto';
import { ReadAnswerInput } from './dto/read-answer.dto';

@Controller('answer')
export class AnswerController {
    constructor (private answerservice:AnswerService){}


@Post('creatanswer')
@ApiBody({type: CreateAnswerInput})
@ApiResponse({ status: 200 })
async AnswerCreate (@Body() input : CreateAnswerInput){
    this.answerservice.creat_answer(input);

}


@Post('deletanswer')
@ApiBody({type: DeleteAnswerInput})
@ApiResponse({ status: 200 })
async AnswerDelet (@Body() input : DeleteAnswerInput){
    this.answerservice.delet_answer(input);

}
@Get('readanswer')
@ApiBody({type: DeleteAnswerInput})
@ApiResponse({ status: 200 })
async AnswerRead (@Body() input : ReadAnswerInput){
    this.answerservice.readAnswer(input);

}








}
