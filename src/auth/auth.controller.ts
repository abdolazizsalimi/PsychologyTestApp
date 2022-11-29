import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService){}
    @Get()
    getAuth(): string {
      return this.authservice.getAuth();
    }
    
    
}
