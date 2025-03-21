import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PetDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    animal: string;
    
    @IsString()
    @IsNotEmpty()
    race: string;
    
    @IsString()
    @IsNotEmpty()
    owner: string;
    
    @IsNumber()
    @IsNotEmpty()
    phone: number;
    
    @IsDate()
    @IsNotEmpty()
    birthdate: Date;
}