
import { GET_POKEMON_LIST , LOADING} from "./constants"


export const getPokemon = (payload) =>{
    return {
        type: GET_POKEMON_LIST,
        payload : payload
    }
}

export const setLoading = (payload) =>{
    return {
        type: LOADING,
        payload : payload
    }
}
