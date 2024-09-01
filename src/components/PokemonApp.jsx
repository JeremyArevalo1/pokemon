import { useState } from "react"
import { usePokemon } from "../hooks/usePokemon"
import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"

export const PokemonApp = () => {
    const {handleGetPokemon, iPokedex} = usePokemon()

    return (
        <>
        <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
        <ContenedorPokemon iPokedex={iPokedex}/>
        </>
    )
}