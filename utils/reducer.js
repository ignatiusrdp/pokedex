
import { GET_POKEMON_LIST, LOADING } from "./constants"

const Reducer = (state, action) =>{
    switch(action.type) {
        case GET_POKEMON_LIST:
            return {
                ...state,
                count : action.payload.count,
                next : action.payload.next,
                prev : action.payload.previous,
                pokemons : action.payload.results
            }
        case LOADING:
            return {
                ...state,
                loading : action.payload
            }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

export default Reducer