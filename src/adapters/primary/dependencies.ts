import { InMemoryPokemonGateway } from '../secondary/inMemoryPokemonGateway'
import {Pokemon} from "../../core/entities/pokemon";


export const pokemonGateway = () => {
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

    const pokemonGateway: InMemoryPokemonGateway = new InMemoryPokemonGateway()
    pokemonGateway.feedWith(bulbizarre, carapuce)

    return pokemonGateway
}
