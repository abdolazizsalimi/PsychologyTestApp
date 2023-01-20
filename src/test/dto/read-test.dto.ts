import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsEmail,IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/paganation.input";
import { SortByData } from "src/common/input/sort-data.dto";

class ReadTestData {

    @ApiPropertyOptional()
    @IsOptional()
    id?: number

    @ApiPropertyOptional()
    @IsOptional()
    gard?: number

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    title?: string


    @ApiPropertyOptional()
    description ?: string 


}

export class ReadTestInput {
    @ApiProperty({ type: ReadTestData })
    @Type(() => ReadTestData)
    @ValidateNested()
    data: ReadTestData

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

