import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { user_role } from "@prisma/client";

import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MinLength, Validate, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/paganation.input";
import { SortByData } from "src/common/input/sort-data.dto";

class ReadUserData {


    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    id?: number

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    username?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    firstname?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    lastname?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    gender?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    age?: number


    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    phoneNumber?: string



    @ApiPropertyOptional()
    @IsOptional()
    role ?: user_role

}

export class ReadUserInput {
    @ApiPropertyOptional({ type: ReadUserData })
    @Type(() => ReadUserData)
    @ValidateNested()
    data?: ReadUserData

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

