import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsUUID, ValidateNested } from "class-validator";

class CreateTestData {



    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    test_id: number

    @ApiProperty()
    @IsString()
    grade: number

    @ApiProperty()
    @IsUUID()
    userId: string


}

export class CreateTestInput {
    @ApiProperty({ type: CreateTestData })
    @Type(() => CreateTestData)
    @ValidateNested()
    data: CreateTestData
}