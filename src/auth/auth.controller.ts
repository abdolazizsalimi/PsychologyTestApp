import { Body, Controller, Get, Post, Query, Req , Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateUserInput } from 'src/auth/dtos/CreateUser.dto';
import { LoginInputDto } from 'src/auth/dtos/LoginUser.dto';
import { ReadUserInput } from 'src/auth/dtos/read-user.dto';
import { UpdateUserInput } from 'src/auth/dtos/UpdateUser.dto';
import { AuthService } from './auth.service';


@Controller('auth/')
export class AuthController {
    constructor(private authservice:AuthService){}


  // @UseGuards(JwtAuthGuard)
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


  @Post("readUser")
  @ApiQuery({ type: ReadUserInput })
  @ApiResponse({ status: 200 })
  async readUser(@Query() input: ReadUserInput) {
      return await this.authservice.readUser(input)
  }

  

}
