import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/paganation.input";
import { SortByData } from "src/common/input/sort-data.dto";

class ReadAnswerData {

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    id_question?: number
    
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    value ?: string
    
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    percentage ?: number
}

export class ReadAnswerInput {
    @ApiPropertyOptional({ type:  ReadAnswerData})
    @Type(() => ReadAnswerData)
    @ValidateNested()
    data?: ReadAnswerData

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