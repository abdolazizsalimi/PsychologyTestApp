import { Injectable } from '@nestjs/common';
import { LoginInputDto } from 'src/users/dtos/LoginUser.dto';
import { PrismaService } from '../prisma/prisma.service'
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from 'src/users/dtos/CreateUser.dto';
import { randomInt } from 'crypto';
import { UpdateUserInput } from 'src/users/dtos/UpdateUser.dto';

var crypto = require('crypto'); 



@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    
) { }

    getAuth(): string {
        return 'Hello World!';
      }


    async login(input :LoginInputDto) {
      
     

      const Userdata = await this.prisma.user.findUnique({
        where: {
          username:input.username,
        },
      });

      var hash = crypto.pbkdf2Sync(input.password, 'salt', 1000, 64 , `sha512` ).toString('hex');

      // if(hash == Userdata.password){
      //   console.log(hash)
      //   console.log(Userdata.password)

      // }
      

      if (hash === Userdata.password ){
        const payload = {
            username: input.username,
            password: input.password,
          };
          return {
          //   access_token: this.jwtService.sign(payload),
            user: payload,
             
          };

      }


    }


    async updateUser(input : UpdateUserInput) { 
      const { data } = input
      const username = data.username.toLowerCase()
      const updateUser = await this.prisma.user.update({
        where: {

          username : username ,
          
        },
        data: {
          firstname: data.firstname.toLocaleLowerCase(), 
          lastname: data.lastname.toLocaleLowerCase() || undefined, 
          email: data.email.toLowerCase() || undefined,
        },
      })
      return updateUser



    }




async createUser(input: CreateUserInput) {
  const { data } = input
  const username = data.username.toLowerCase()
  const email = data.email.toLowerCase()
  await this.verifyIfNewUserIsNotDuplicate(username, email)
  await this.verifyPasswordEqualToConfirmPassword(data.password, data.confirmPassword)
  const hashedPassword = await this.createHashedPassword(data.password)


  const user = await this.prisma.user.create({
      data: {
          firstname: data.firstname,
          lastname: data.lastname,
          password: hashedPassword,
          username: username,
          phonenumber: data.phoneNumber,
          email: email,
          age: data.age,
          gender: data.gender,
          id_user: randomInt(10000000)
      }
  })
  return user
}






      
private async createHashedPassword(password: string) {
  return await crypto.pbkdf2Sync(password, 'salt', 1000, 64 ,`sha512`).toString('hex');
}


private async verifyIfNewUserIsNotDuplicate(username: string, email: string) {
  if (username) {
      const duplicateUsername = await this.prisma.user.findFirst({ where: { username } })
      if (duplicateUsername)
          console.log("error in verifyUserIsNotDuplicate")
  }


  if (email) {
      const duplicateEmail = await this.prisma.user.findFirst({ where: { email } })
      if (duplicateEmail)
          console.log("error in verifyUserIsNotDuplicate")
  }
}



async verifyPasswordEqualToConfirmPassword(newPassword: string, confirmPassword: string) {
if (newPassword != confirmPassword)
    console.log("verifyPasswordEqualToConfirmPassword")
}

    
}
