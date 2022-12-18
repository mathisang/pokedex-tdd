import { findPokemon } from './findPokemon'
import { InMemoryPokemonGateway } from '../../../adapters/secondary/inMemoryPokemonGateway'
import { Pokemon } from '../../entities/pokemon'

describe('Find pokemon with his id', () => {
    let pokemonGateway: InMemoryPokemonGateway
    const id: number = 2

    beforeEach(() => {
        pokemonGateway = new InMemoryPokemonGateway()
    })

    it('should return a pokemon', async () => {
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
        const pokemon = await findPokemon(pokemonGateway, id)
        expect(pokemon).toEqual(carapuce)
    })
    it('should return an error with undefined pokemon', () => {
        expect(async () => await findPokemon(pokemonGateway, id)).rejects.toThrow('Pokemon not found')
    })
})

// Create Pokemon
// Throw error if empty field
// JsonServer with new usecases