import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBody, ApiResponse } from '@nestjs/swagger'
import { CreateUserInput } from 'src/auth/dtos/CreateUser.dto'
import { LoginInputDto } from 'src/auth/dtos/LoginUser.dto'
import { ReadUserInput } from 'src/auth/dtos/read-user.dto'
import { UpdateUserInput } from 'src/auth/dtos/UpdateUser.dto'
import { AuthService } from './auth.service'
import { GetUserId } from './decorator/get-user-id.decorator'

@Controller('auth/')
export class AuthController {
  constructor(private authservice: AuthService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('login')
  async login(@Body() input: LoginInputDto) {
    console.log(input)
    return this.authservice.login(input)
  }

  @Post('createUser')
  @ApiBody({ type: CreateUserInput })
  @ApiResponse({ status: 200 })
  async createUser(@Body() input: CreateUserInput) {
    return await this.authservice.createUser(input)
  }

  @Get('me')
  @ApiResponse({ status: 200 })
  async me(@GetUserId() userId: number) {
    return await this.authservice.me(userId)
  }

  @Post('updateUser')
  @ApiBody({ type: UpdateUserInput })
  @ApiResponse({ status: 200 })
  async updateUser(@Body() input: UpdateUserInput) {
    return await this.authservice.updateUser(input)
  }

  @Get('readUser')
  @ApiBody({ type: ReadUserInput })
  @ApiResponse({ status: 200 })
  async readUser(@Body() input: ReadUserInput) {
    return await this.authservice.readUser(input)
  }
}
