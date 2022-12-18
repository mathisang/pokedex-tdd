import { PokemonGateway } from '../../gateways/pokemonGateway'
import { Pokemon } from '../../entities/pokemon'

export const findPokemon = async (pokemonGateway: PokemonGateway, id: number): Promise<Pokemon> => {
    return await pokemonGateway.find(id)
}