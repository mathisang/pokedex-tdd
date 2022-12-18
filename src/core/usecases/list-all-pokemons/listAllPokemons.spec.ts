import { listAllPokemons } from './listAllPokemons'
import { InMemoryPokemonGateway } from '../../../adapters/secondary/inMemoryPokemonGateway'
import { Pokemon } from '../../entities/pokemon'

describe('List all pokemons', () => {
    let pokemonGateway: InMemoryPokemonGateway
    beforeEach(() => {
        pokemonGateway = new InMemoryPokemonGateway()
    })
    it('should return [] when there is no pokemons', async () => {
        const allPokemons = await listAllPokemons(pokemonGateway)
        expect(allPokemons).toEqual([])
    })
    it('should return all pokemons when not empty', async () => {
        const bulbizarre: Pokemon = {
            "id": 1,
            "name": "Bulbizarre",
            "type": "Plante"
        }
        const carapuce: Pokemon = {
            "id": 2,
            "name": "Carapuce",
            "type": "Eau"
        }
        pokemonGateway.feedWith(bulbizarre, carapuce)
        const allPokemons = await listAllPokemons(pokemonGateway)
        const expectedPokemons: Array<Pokemon> = [bulbizarre, carapuce]
        expect(allPokemons).toEqual(expectedPokemons)
    })
})
