import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from "class-validator";

class CreateQuestionsData {

    @ApiProperty()
    @IsNumber()
    grade: number

    @ApiProperty()
    @IsNumber()
    question_id: number

    @ApiProperty()
    @IsString()
    value: string


}

export class CreateQuestionInput {
    @ApiProperty({ type: CreateQuestionsData })
    @Type(() => CreateQuestionsData)
    @ValidateNested()
    QuestionData: CreateQuestionsData
}