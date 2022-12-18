import { PokemonGateway } from '../../core/gateways/pokemonGateway'
import { Pokemon } from '../../core/entities/pokemon'
import { createPokemonDto } from "../../core/dto/createPokemonDto";

export class InMemoryPokemonGateway implements PokemonGateway {
    private pokemon: Array<Pokemon> = []

    listAll(): Promise<Array<Pokemon>> {
        return Promise.resolve(this.pokemon)
    }

    find(id: number): Promise<Pokemon> {
        const pokemon = this.pokemon.find(pokemon => pokemon.id == id)
        if(!pokemon) {
            throw new Error('Pokemon not found')
        }
        return Promise.resolve(pokemon)
    }

    create(createPokemonDto: createPokemonDto): Promise<Pokemon> {
        const sortedList = this.pokemon.sort((a, b) => a.id - b.id)
        const lastPokemon = sortedList[sortedList.length - 1]
        const id = lastPokemon ? lastPokemon.id + 1 : 1

        if(createPokemonDto.name.length > 0 && createPokemonDto.type.length > 0) {
            const pokemon: Pokemon = {
                id: id,
                ...createPokemonDto,
            }
            this.pokemon.push(pokemon)

            return Promise.resolve(pokemon)
        } else {
            throw new Error("Error with fields")
        }
    }

    feedWith(...pokemon: Array<Pokemon>) {
        this.pokemon = pokemon
    }
}
