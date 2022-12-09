import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {ValidateNested } from "class-validator";

class DeleteTestData {
    @ApiProperty()
    title: string
}

export class DeletePostInput {

    @ApiProperty({ type: DeleteTestData })
    @Type(() => DeleteTestData)
    @ValidateNested()
    data: DeleteTestData
}