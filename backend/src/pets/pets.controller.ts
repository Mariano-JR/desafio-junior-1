import { Body, Controller, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { Pet } from "./entities/pet.entity";
import { v4 as uuid } from 'uuid'
import { PetDto } from "./dto/pet.dto";
import { UpdatePetDto } from "./dto/update_pet.dto";

@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.petsService.searchById(id);
    }

    @Get()
    findAll(): Promise<PetDto[]> {
        return this.petsService.findAllPets()
    }
    
    @Post()
    newPet(@Body() dataPet: PetDto) {
        let newPet: Pet = {
            id: uuid(),
            name: dataPet.name,
            animal: dataPet.animal,
            race: dataPet.race,
            owner: dataPet.owner,
            phone: dataPet.phone,
            birthdate: dataPet.birthdate
        }

        return this.petsService.create(newPet);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.petsService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() newData: UpdatePetDto) {
        return this.petsService.update(id, newData)
    }
}
