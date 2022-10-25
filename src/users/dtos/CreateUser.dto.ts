import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsString()
    fullname: string

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    @MinLength(6)
    confirmPassword: string

    // @ApiProperty({ enum: Role })
    // @IsEnum(Role)
    // role: Role

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string

    @ApiProperty()
    @IsString()
    phoneNumber: string
}