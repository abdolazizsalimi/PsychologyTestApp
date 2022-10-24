import { Controller, Get, Req, Res , Post, Body, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import {Request,Response} from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

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

@Post('create')
@UsePipes(new ValidationPipe())
createUser(@Body() UserData : CreateUserDto ){
    console.log(UserData)
    return {};  
}

// @Get(':id')
// getuserbyid(@Req() request : Request , @Res() response : Response){
//     console.log(request.params)
//     response.send('id passed')


// }
@Get(':id')
getuserbyid(@Param('id') id : string){

    console.log(id);
    return{id};


}

}

