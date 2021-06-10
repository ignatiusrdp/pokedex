import axios from "axios";

export const getPokemonList = (respFunc, link) =>{
    axios
        .get(link)
        .then((response) => {
            respFunc(response.data)
        })
}