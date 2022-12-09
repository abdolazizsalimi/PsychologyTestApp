import { Controller, Get, Req, Res , Post, Body, Param, UsePipes, ValidationPipe} from '@nestjs/common';

@Controller('users')
export class UsersController {




@Get()
 getUsers(){
    return [{username : 'aziz' , email : 'aziz.s6882@gamil.com'}];
 }

 @Get('post')
 getUsersPost(){

     return [
         {
        username : 'aziz' , 
        email : 'aziz.s6882@gamil.com',
        posts :[
            {
                id : 1,
                title : 'Post 1'

            } ,
            {
                id : 1,
                title : 'Post 2'

            }


        ]

     }
    ];
 }


// @Post('create')
// createUser(@Req() request:Request , @Res() response:Response ){
//     console.log(request.body)
//     response.send('created')
// }





// }
@Get(':id')
getuserbyid(@Param('id') id : string){

    console.log(id);
    return{id};


}

}

