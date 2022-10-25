
import {Entity ,Column,PrimaryGeneratedColumn }from 'typeorm';

@Entity({name: "user"})
export class User{
    @Column({name:"id"})  
    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:"firstname"})
    firstname:string;    
    @Column({name:"lastname"})  
    lastname:string;
}