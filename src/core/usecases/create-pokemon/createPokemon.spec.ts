import { createPokemon } from './createPokemon'
import { InMemoryPokemonGateway } from '../../../adapters/secondary/inMemoryPokemonGateway'
import { Pokemon } from '../../entities/pokemon'

describe('Create a pokemon', () => {
    let pokemonGateway: InMemoryPokemonGateway
    let pokemon: Pokemon
    let bulbizarre: Pokemon = {
        "id": 1,
        "name": "Bulbizarre",
        "type": "Plante"
    }
    let carapuce: Pokemon = {
        "id": 2,
        "name": "Carapuce",
        "type": "Eau"
    }

    beforeEach(async () => {
        pokemonGateway = new InMemoryPokemonGateway()
        pokemonGateway.feedWith(carapuce, bulbizarre)
    })

    it('should create a pokemon', async () => {
        pokemon = await createPokemon({
            name: 'Mew two',
            type: 'Psy',
        }, pokemonGateway)

        const mewtwo: Pokemon = {
            "id": 3,
            "name": "Mew two",
            "type": "Psy"
        }
        expect(pokemon).toEqual(mewtwo)
        expect(await pokemonGateway.listAll()).toEqual([bulbizarre, carapuce, pokemon])
    })
    it('should throw an error', () => {
        const mewtwo: Pokemon = {
            "id": 3,
            "name": "Mew two",
            "type": "Psy"
        }

        expect(pokemon).toEqual(mewtwo)
        expect(async () => await createPokemon({name: '', type: 'Psy'}, pokemonGateway)).rejects.toThrow('Error with fields')
    })
})