import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class GetModleAnswer{

    @ApiProperty()
    @IsString()
    question : string 


    @ApiProperty()
    @IsNumber()
    temp : number
}