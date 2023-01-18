
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import cleanDeep from 'clean-deep';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerInput } from './dto/create-answer.dto';
import { DeleteAnswerInput } from './dto/delet-answer.dto';
import { createPaginationResult } from 'src/common/input/paganation.input';
import { ReadAnswerInput } from './dto/read-answer.dto';

@Injectable()
export class AnswerService {


    constructor(
        private prisma: PrismaService,
    ) { }




    async creat_answer(input : CreateAnswerInput){

        const {Data} = input

        const answer = await this.prisma.answer.create({

            data:{
                id_question: Data.id_question,
                value : Data.value,
                precentage : Data.percentage
            } 
        }

        )
        return answer
    }




    async delet_answer (input : DeleteAnswerInput){
        const {Data} = input 

        const delet  = await this.prisma.answer.delete({
            where:{
                idanswer:Data.id_Answer
            }
        })
        return delet 


    }


    async readAnswer(input: ReadAnswerInput) {
        const rawWhere = input.data || {};
      
        let whereClause: Prisma.answerWhereInput = {
            id_question : rawWhere.id_question, 
            value : rawWhere.value , 
            precentage : rawWhere.percentage

        };
      
        whereClause = cleanDeep(whereClause);
      
        const count = this.prisma.user.count({ where: whereClause });
        const entity = this.prisma.user.findMany({
            where: whereClause,
            ...input?.sortBy?.convertToPrismaFilter(),
            ...input?.pagination?.convertToPrismaFilter(),
        });
        return createPaginationResult({ count, entity });
      }
    
    


}
