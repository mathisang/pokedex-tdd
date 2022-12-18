import { createPokemonDto } from '../../dto/createPokemonDto'
import { PokemonGateway } from '../../gateways/pokemonGateway';
import { Pokemon } from '../../entities/pokemon';

export const createPokemon = (createPokemonDto: createPokemonDto, pokemonGateway: PokemonGateway): Promise<Pokemon> => {
    return pokemonGateway.create(createPokemonDto)
}