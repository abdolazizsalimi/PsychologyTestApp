import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule} from '@nestjs/typeorm';

import { Connection } from "typeorm"; 
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor (private readonly connetion:Connection ){}
}
