import axios from "axios";

export const getPokemonList = (respFunc) =>{
    axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then((response) => {
            respFunc(response.data)
        })
}