import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { ValidateNested } from "class-validator"

class DeleteDoctorData {
    @ApiProperty()
    id_doctor: number
}

export class DeleteDoctorInput {

    @ApiProperty({ type:  DeleteDoctorData})
    @Type(() => DeleteDoctorData)
    @ValidateNested()
    data: DeleteDoctorData
}