import React, {useState} from 'react'
import FetchPokemon from '../components/FetchPokemon'
import PokemonDisplay from '../components/PokemonDisplay'


const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([])

    return (
        <div>
            <FetchPokemon getPokemon={setPokemonList}/>
            <PokemonDisplay pokemonList={pokemonList}/>
        </div>
    )
}

export default PokemonPage