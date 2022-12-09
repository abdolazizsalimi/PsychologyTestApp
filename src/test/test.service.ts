import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { CreateTestInput } from './dto/creat-test.input';
import { DeleteTestInput } from './dto/delet-test.input';

@Injectable()
export class TestService {

    constructor(
        private prisma: PrismaService,
        
    ) { }
    

    async creat_test (input : CreateTestInput){
        const {data} = input



        const test = await this.prisma.test.create(
            {
                data:{
                title: data.title,
                id_test : data.test_id,
                grade : data.grade,
            
                

            
            }

        }

        )

        return test
    }

    async delet_test(input:DeleteTestInput) {
        const {data} = input

        const delet = await this.prisma.test.delete(
            {
                where: {
                  // ... filter to delete one Test
                   title : data.title
                }
              }
        )
        
    }







}
