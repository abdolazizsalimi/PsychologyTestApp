import { Body, Controller, Get, Post, Req , Request } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateUserInput } from 'src/users/dtos/CreateUser.dto';
import { LoginInputDto } from 'src/users/dtos/LoginUser.dto';
import { ReadUserInput } from 'src/users/dtos/read-user.dto';
import { UpdateUserInput } from 'src/users/dtos/UpdateUser.dto';
import { AuthService } from './auth.service';

@Controller('auth/')
export class AuthController {
    constructor(private authservice:AuthService){}

  @Post('login')
  async login(@Body() input : LoginInputDto) {
      console.log(input)
    return this.authservice.login(input);
  }


  @Post("createUser")
  @ApiBody({ type: CreateUserInput })
  @ApiResponse({ status: 200 })
  async createUser(@Body() input: CreateUserInput) {
      return await this.authservice.createUser(input)
  }

  @Post("updateUser")
  @ApiBody({ type: UpdateUserInput })
  @ApiResponse({ status: 200 })
  async updateUser(@Body() input: UpdateUserInput) {
      return await this.authservice.updateUser(input)

  }


  @Get("readUser")
  @ApiBody({ type: ReadUserInput })
  @ApiResponse({ status: 200 })
  async readUser(@Body() input: ReadUserInput) {
      return await this.authservice.readUser(input)
  }

  

}
