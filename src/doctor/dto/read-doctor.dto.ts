import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { doctor_dr_gender, doctor_specialization } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, IsPhoneNumber, IsString, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/paganation.input";
import { SortByData } from "src/common/input/sort-data.dto";

class ReadDoctorData {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    id?: number


    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    doctor_name? : string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    doctor_lastname? : string

    @ApiPropertyOptional()
    @IsOptional()
    @IsEnum(doctor_specialization)
    specialization ?: doctor_specialization

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    background ?: number

    @ApiPropertyOptional()
    @IsOptional()
    @IsEnum(doctor_dr_gender)
    doctor_gender ? : doctor_dr_gender


    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    doctor_description ? : string

    
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    address ? : string
    
    @ApiPropertyOptional()
    @IsOptional()
    @IsPhoneNumber()
    phonenumber ? : string





}


export class ReadDoctorInput {
    @ApiProperty({ type: ReadDoctorData })
    @Type(() => ReadDoctorData)
    @ValidateNested()
    data: ReadDoctorData

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
