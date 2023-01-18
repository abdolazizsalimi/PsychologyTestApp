
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
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
     
}

export class CreateUserInput {
  @ApiProperty({ type: CreateUserDto })
  @Type(() => CreateUserDto)
  @ValidateNested()
  data: CreateUserDto;
}
