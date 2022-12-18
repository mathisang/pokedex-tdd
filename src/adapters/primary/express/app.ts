import express = require('express')
import { listAllPokemons } from '../../../core/usecases/list-all-pokemons/listAllPokemons'
import { pokemonGateway } from '../dependencies'
import { findPokemon } from "../../../core/usecases/find-pokemon/findPokemon";
import { createPokemon } from "../../../core/usecases/create-pokemon/createPokemon";
import { InMemoryPokemonGateway } from "../../secondary/inMemoryPokemonGateway";

export const app = express()


app.use(express.json())

app.get('/pokemons', async (req: any, res: any) => {
    const pokemons = await listAllPokemons(pokemonGateway())
    res.send(JSON.stringify(pokemons))
})

app.get('/pokemons/:id', async (req: any, res: any) => {
    try {
        const id = req.params.id
        const pokemon = await findPokemon(pokemonGateway(), id)
        res.send(JSON.stringify(pokemon))
    } catch(error) {
        return error
    }
})

app.post('/pokemons', async (req: any, res: any, state: any) => {
    try {
        let memoryPokemonGateway: InMemoryPokemonGateway
        memoryPokemonGateway = new InMemoryPokemonGateway()

        let name = req.body.name
        let type = req.body.type

        const pokemon = await createPokemon({
            name: name,
            type: type,
        }, memoryPokemonGateway)

        res.send(JSON.stringify(pokemon))
    } catch(error) {
        state(error)
    }
})
