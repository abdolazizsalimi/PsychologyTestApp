
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerInput } from './dto/create-answer.dto';
import { DeleteAnswerInput } from './dto/delet-answer.dto';

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


}
