import { Pokemon } from '../entities/pokemon'
import { createPokemonDto } from "../dto/createPokemonDto";

export interface PokemonGateway {
    listAll(): Promise<Array<Pokemon>>
    find(id: number): Promise<Pokemon>
    create(createPokemonDto: createPokemonDto): Promise<Pokemon>
}
