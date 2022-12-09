import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateTestInput } from './dto/creat-test.input';
import { DeleteTestInput } from './dto/delet-test.input';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private testservice:TestService){}

@Post('creatTest')
@ApiBody({ type: CreateTestInput })
@ApiResponse({ status: 200 })
async createTest(@Body() input: CreateTestInput) {
    this.testservice.creat_test(input)
    console.log('post created');
    
}

@Post('deletTest')
@ApiBody({ type: DeleteTestInput })
@ApiResponse({ status: 200 })
async deletTest(@Body() input: DeleteTestInput) {
    this.testservice.delet_test(input)
    console.log('post created');
    
}



}
