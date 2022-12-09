import { Injectable } from '@nestjs/common';

import { LoginInputDto } from './dtos/LoginUser.dto';


@Injectable()
export class UsersService {

    async login(user :LoginInputDto) {
        const payload = {
            username: user.username,
            password: user.password,
          };
          return {
          //   access_token: this.jwtService.sign(payload),
            user: payload,
          };
        }
    
  
}
