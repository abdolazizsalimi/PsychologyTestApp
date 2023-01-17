import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatDoctorInput } from './dto/creat-doctor.dto';
import { DeleteDoctorInput } from './dto/delet-doctor.dto';
import { UpdateDoctorInput } from './dto/update-doctor.dto';

@Injectable()
export class DoctorService {
    constructor(
        private prisma: PrismaService,
    ) { }


    
    async creat_doctor (input : CreatDoctorInput ){
        const {Data} = input
        const Doctor = await this.prisma.doctor.create({
            data:{
                dr_name:Data.doctor_name,
                dr_lastname : Data.doctor_lastname,
                specialization: Data.specialization,
                dr_gender : Data.doctor_gender,
                background : Data.background ,
                id_doctor: Data.id ,
                description : Data.doctor_description,
                phoneNumber : Data.phonenumber ,
                address : Data.address

            }
        }
        
        )
        return Doctor 

    }



    async delet_doctor (input : DeleteDoctorInput ){
        const {data} = input 
       const delet = await this.prisma.doctor.delete({
            where:{
                id_doctor:data.id_doctor
            }
        })
        return delet 

    }    

    async updateDoctor(input : UpdateDoctorInput) { 
        const { Data } = input
        const name  = Data.doctor_name.toLowerCase()
        const lastname  = Data.doctor_lastname.toLowerCase()
        const description  = Data.doctor_description
        const phonenumber = Data.phonenumber
        const address = Data.address
        
        const updateDoctor = await this.prisma.doctor.update({
          where: {
  
            id_doctor : Data.id
            
          },
          data: {
            dr_name : name ,
            dr_lastname : lastname,
            description : description,
            address :address ,
            phoneNumber : phonenumber


          },
        })
        return updateDoctor
  
  
  
      }

    
    
}
