import { IsNotEmpty } from "class-validator";
import { title } from "process";

export class BookDTO{
    id : string;
    
    @IsNotEmpty()
    tittle : string;
    
    @IsNotEmpty()
    description : string;

    @IsNotEmpty()
    bar_code : string;
}