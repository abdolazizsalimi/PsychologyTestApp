import { ApiProperty } from "@nestjs/swagger";
import { user_role } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEmail, IsString, IsUUID, ValidateNested } from "class-validator";

class UpdateUserData {

    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsString()
    firstname: string


    @ApiProperty()
    @IsString()
    lastname: string

    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    phoneNumber: string

    @ApiProperty()
    role : user_role
}


export class UpdateUserInput {

    @ApiProperty()
    @IsUUID()
    id: string

    @ApiProperty({ type: UpdateUserData })
    @Type(() => UpdateUserData)
    @ValidateNested()
    data: UpdateUserData
}