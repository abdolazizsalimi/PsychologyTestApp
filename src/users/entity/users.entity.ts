import { ApiProperty } from "@nestjs/swagger";
export class UserEntity {  
    
    @ApiProperty()
    id: string

    @ApiProperty()
    username: string

    @ApiProperty()
    email: string

    @ApiProperty()
    role: string

    @ApiProperty()
    phoneNumber: string

  
}
