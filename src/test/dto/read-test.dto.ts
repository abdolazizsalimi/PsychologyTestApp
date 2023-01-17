import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsEmail,IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/paganation.input";
import { SortByData } from "src/common/input/sort-data.dto";

class ReadTestData {

    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID()
    id?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    gard?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    title?: string

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
    sortyBy?: SortByData
}

