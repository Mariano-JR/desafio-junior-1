import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePetDto {
    @IsString()
    @IsOptional()
    name?: string;
    
    @IsString()
    @IsOptional()
    animal?: string;
    
    @IsString()
    @IsOptional()
    race?: string;
    
    @IsString()
    @IsOptional()
    owner?: string;
    
    @IsNumber()
    @IsOptional()
    phone?: number;
    
    @IsDate()
    @IsOptional()
    birthdate?: Date;
}