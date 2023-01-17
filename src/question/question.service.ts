import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionInput } from './dto/creat-questions.dto';

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




}
