import { PokemonGateway } from '../../gateways/pokemonGateway'
import { Pokemon } from '../../entities/pokemon'

export const listAllPokemons = async (pokemonGateway: PokemonGateway): Promise<Array<Pokemon>> => {
    return await pokemonGateway.listAll()
}