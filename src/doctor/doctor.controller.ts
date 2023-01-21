import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { DoctorService } from './doctor.service';
import { CreatDoctorInput } from './dto/creat-doctor.dto';
import { DeleteDoctorInput } from './dto/delet-doctor.dto';
import { ReadDoctorInput } from './dto/read-doctor.dto';
import { UpdateDoctorInput } from './dto/update-doctor.dto';

@Controller('doctor')
export class DoctorController {
    constructor (private doctorservice:DoctorService){}



    @Post('creatDoctor')
    @ApiBody({ type:  CreatDoctorInput })
    @ApiResponse({ status: 200 })
    async createTest(@Body() input: CreatDoctorInput ) {
        this.doctorservice.creat_doctor(input)
        
        
    }
    
    @Post('deletDoctor')
    @ApiBody({ type: DeleteDoctorInput })
    @ApiResponse({ status: 200 })
    async deletTest(@Body() input: DeleteDoctorInput) {
        this.doctorservice.delet_doctor(input)
    
    }

    @Post("updateDoctor")
    @ApiBody({ type: UpdateDoctorInput })
    @ApiResponse({ status: 200 })
    async updateUser(@Body() input:UpdateDoctorInput ) {
        return await this.doctorservice.updateDoctor(input)
    }


    @Post("readDoctor")
    @ApiQuery({ type: ReadDoctorInput })
    @ApiResponse({ status: 200 })
    async raedUser(@Query() input:ReadDoctorInput ) {
        return await this.doctorservice.readDoctor(input)
    }
}
