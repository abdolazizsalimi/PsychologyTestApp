import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import cleanDeep from 'clean-deep';
import { createPaginationResult } from 'src/common/input/paganation.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionInput } from './dto/creat-questions.dto';
import { ReadQuestionInput } from './dto/read-question.dto';

@Injectable()
export class QuestionService {
    constructor(
        private prisma: PrismaService,
    ) { }


    async  generateQuestion(input :CreateQuestionInput ) {
        const {QuestionData} = input
        const temp = await this.prisma.questions.createMany({
            data: {
        
                id_question : QuestionData.question_id,
                grade : QuestionData.grade ,
                value : QuestionData.value
            }
            ,
            skipDuplicates : true


        })
        console.log(temp);
        
        
    }




    async readQuestion(input: ReadQuestionInput) {
        const rawWhere = input.data || {};
      
        let whereClause: Prisma.questionsWhereInput = {
            id_question : rawWhere.question_id , 
            grade : rawWhere.grade ,
            value : rawWhere.value
    
        };
      
        // whereClause = cleanDeep(whereClause);
      
        const count = this.prisma.questions.count({ where: whereClause });
        const entity = this.prisma.questions.findMany({
            where: whereClause,
            // ...input?.sortBy?.convertToPrismaFilter(),
            // ...input?.pagination?.convertToPrismaFilter(),
        });
        return createPaginationResult({ count, entity });
      }
      




}
