import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { isNumber, IsString, IsUUID, ValidateNested } from "class-validator";

class CreateTestData {



    @ApiProperty()
    @IsString()
    title: string


    
    @ApiProperty()
    test_id: number


    
    @ApiProperty()
    grade: number

    @ApiProperty()
    description : string 



}

export class CreateTestInput {
    @ApiProperty({ type: CreateTestData })
    @Type(() => CreateTestData)
    @ValidateNested()
    data: CreateTestData
}