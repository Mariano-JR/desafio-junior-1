import { Dispatch, SetStateAction } from "react";
import iPet from "../PetCard/iPet";

interface iHeader {
    petsData: iPet[],
    setFilteredPets: Dispatch<SetStateAction<iPet[]>>
}

export default iHeader;