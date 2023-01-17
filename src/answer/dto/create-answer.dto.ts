import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from "class-validator";

class CreateAnswerData {

    @ApiProperty()
    @IsNumber()
    id_question : number
    
    
    @ApiProperty()
    @IsString()
    value : string
    
    @ApiProperty()
    @IsNumber()
    percentage : number
}

export class CreateAnswerInput {
    @ApiProperty({ type:  CreateAnswerData})
    @Type(() => CreateAnswerData)
    @ValidateNested()
    Data: CreateAnswerData
}