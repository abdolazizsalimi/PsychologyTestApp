import { ApiProperty } from "@nestjs/swagger";
import { doctor_dr_gender, doctor_specialization } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsPhoneNumber, IsString, IsUUID, ValidateNested } from "class-validator";

class UpdateDoctorData {
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
    @IsNumber()
    background : number

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

export class UpdateDoctorInput {
    @ApiProperty({ type: UpdateDoctorData })
    @Type(() => UpdateDoctorData)
    @ValidateNested()
    Data: UpdateDoctorData
}