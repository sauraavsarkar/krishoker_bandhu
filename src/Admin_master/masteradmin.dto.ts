
import { IsNotEmpty } from 'class-validator'


export class masteradminInfo{
    @IsNotEmpty({message: 'Please enter a valid name'}) 
    name:string;
    @IsNotEmpty() 
    username:string;
    password:string;
    address:string;
    filename:string;
}


export class masteradminUpdateInfo{
    name:string;
    username:string;
    password:string;
    address:string;
    age:number;
    }