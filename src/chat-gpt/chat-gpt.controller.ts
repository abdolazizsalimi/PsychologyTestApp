import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetModleAnswer } from 'src/model/model-ai-gpt';
import { ChatGptService } from './chat-gpt.service';

@Controller('chat-gpt')
export class ChatGptController {
    constructor(private chatgptservice : ChatGptService){}

    @Post('questions')
    @ApiBody({ type:  GetModleAnswer })
    @ApiResponse({ status: 200 })
    getModleAnswer(@Body() input:GetModleAnswer  ){
        return this.chatgptservice.getUserAnswer(input.question , input.temp)
         

    }
}
