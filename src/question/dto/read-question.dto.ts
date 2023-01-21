import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/paganation.input";
import { SortByData } from "src/common/input/sort-data.dto";

class ReadQuestionsData {


    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    grade?: number


    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    question_id?: number

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    value?: string


}

export class ReadQuestionInput {
    @ApiPropertyOptional({ type: ReadQuestionsData })
    @Type(() => ReadQuestionsData)
    @ValidateNested()
    data?: ReadQuestionsData

    @ApiPropertyOptional({ type: PaginationData })
    @IsOptional()
    @Type(() => PaginationData)
    @ValidateNested()
    pagination?: PaginationData

    @ApiPropertyOptional({ type: SortByData })
    @Type(() => SortByData)
    @ValidateNested()
    sortBy?: SortByData
}