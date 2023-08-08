import React from 'react'

const PokemonDisplay = (props) => {
    return (
        <div>
            <ul>
                {
                    props.pokemonList.map(pokemon => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PokemonDisplay