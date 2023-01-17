import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNumber, ValidateNested } from "class-validator"

class DeleteAnswerData {
    @ApiProperty()
    @IsNumber()
    id_Answer: number
}

export class DeleteAnswerInput {

    @ApiProperty({ type:  DeleteAnswerData})
    @Type(() => DeleteAnswerData)
    @ValidateNested()
    Data: DeleteAnswerData
}