
import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi  , CreateCompletionRequest} from "openai";


const DEFULT_MODLE_ID = "text-davinci-003"
const DEFULT_BEST = 1
const DEFULT_TEMEP = 0.9
const DEFULT_TOKEN = 4000 
@Injectable()
export class ChatGptService {

    private readonly openaiAPI:OpenAIApi
    constructor(){
        const configuration = new Configuration({
            organization: process.env.ORGANIZTION_ID,
            apiKey: process.env.OPENAI_API_KEY,
        });
        this.openaiAPI = new OpenAIApi(configuration);
        // const response = await openai.listEngines();
    }



    async getUserAnswer(question : string , termpertuer? : number)
    {

        try {
            const params : CreateCompletionRequest = {
                prompt:question,
                model:DEFULT_MODLE_ID,
                temperature : termpertuer!=undefined?termpertuer:DEFULT_TEMEP,
                max_tokens: DEFULT_TOKEN,
                // best_of :DEFULT_BEST
            

            }

            const response = await this.openaiAPI.createCompletion(params,)
            const {data} = response
            if (data.choices.length){
                return data.choices
            }

            return response.data
            
        } catch (error) {
            
        }

    }
}
