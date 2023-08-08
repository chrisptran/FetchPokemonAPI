import React from 'react'

const FetchPokemon = (props) => {

    

    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(jsonResponse => {
            console.log(jsonResponse.results);
            props.getPokemon(jsonResponse.results)
        })
        .catch(err => console.log(err))

    }

    return (
        <div>
            <button onClick={handleClick}>Fetch Pokemon</button>

        </div>
    )
}

export default FetchPokemon