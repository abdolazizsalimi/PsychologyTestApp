import { ApiProperty } from "@nestjs/swagger";
import { doctor_dr_gender, doctor_specialization } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsPhoneNumber, IsString, IsUUID, ValidateNested } from "class-validator";

class CreateDoctorData {
    @ApiProperty()
    @IsNumber()
    id: number


    @ApiProperty()
    @IsString()
    doctor_name : string

    @ApiProperty()
    @IsString()
    doctor_lastname : string

    @ApiProperty()
    @IsEnum(doctor_specialization)
    specialization : doctor_specialization

    @ApiProperty()
    @IsNumber()
    background : number

    @ApiProperty()
    @IsEnum(doctor_dr_gender)
    doctor_gender : doctor_dr_gender


    @ApiProperty()
    @IsString()
    doctor_description: string

    
    @ApiProperty()
    @IsString()
    address: string
    
    @ApiProperty()
    @IsPhoneNumber()
    phonenumber: string





}

export class CreatDoctorInput {
    @ApiProperty({ type: CreateDoctorData })
    @Type(() => CreateDoctorData)
    @ValidateNested()
    Data: CreateDoctorData
}