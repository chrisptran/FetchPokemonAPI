import React from 'react'
import axios from 'axios'

const FetchPokemon = (props) => {

    

    const handleFetch = () => {
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

    const handleAxios = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then(response => {
            props.getPokemon(response.data.results);
        })
    }

    return (
        <div>
            <button onClick={handleFetch}>Fetch Pokemon</button>
            <button onClick={handleAxios}>Axios Pokemon</button>

        </div>
    )
}

export default FetchPokemon