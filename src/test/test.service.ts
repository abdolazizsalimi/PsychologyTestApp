import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import cleanDeep from 'clean-deep';
import { createPaginationResult } from 'src/common/input/paganation.input';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestInput } from './dto/creat-test.input';
import { DeleteTestInput } from './dto/delet-test.input';
import { ReadTestInput } from './dto/read-test.dto';

@Injectable()
export class TestService {

    constructor(
        private prisma: PrismaService,
    
        
    ) { }
    

    async creat_test (input : CreateTestInput ){
        const {data} = input



        const test = await this.prisma.test.create(
            {
                data:{
                title: data.title,
                id_test : data.test_id,
                grade : data.grade,
                description : data.description
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
        return delet
        
    }

    async readTest(input: ReadTestInput) {
        console.log('im')
        const rawWhere = input.data || {};
        console.log(rawWhere);
        
      
        let whereClause: Prisma.testWhereInput = {
            id_test : rawWhere.id,
            title : rawWhere.title ,
            grade : rawWhere.gard  ,
            description : rawWhere.description
        };
      
        // whereClause = cleanDeep(whereClause);
      
        const count = this.prisma.test.count({ where: whereClause });
        const entity = this.prisma.test.findMany({
            where: whereClause,
            // ...input?.sortBy?.convertToPrismaFilter(),
            // ...input?.pagination?.convertToPrismaFilter(),
        });

        console.log(entity)
        return createPaginationResult({ count, entity });
      }
      


}
