<<<<<<< HEAD:src/auth/dtos/CreateUser.dto.ts
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isEnum, IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { user_role } from "@prisma/client";


export class CreateUserDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsString()
    firstname: string

    @ApiProperty()
    @IsString()
    lastname: string

    @ApiProperty()
    @IsString()
    gender: string

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    age: number

    @ApiProperty()
    @IsString()
    @MinLength(6)
    confirmPassword: string

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string

    @ApiProperty()
    @IsString()
    phoneNumber: string

    @ApiProperty()
    role : user_role
     
=======
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  firstname: string;

  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  confirmPassword: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;
>>>>>>> 66d704865fa82d89e80180ffa93c3f8f89227e79:src/users/dtos/CreateUser.dto.ts
}

export class CreateUserInput {
  @ApiProperty({ type: CreateUserDto })
  @Type(() => CreateUserDto)
  @ValidateNested()
  data: CreateUserDto;
}
