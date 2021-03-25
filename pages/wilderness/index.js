import React , { useEffect } from  'react'
import { useStateContext } from '../../utils/ContextProvider'
import { getPokemonList } from '../../utils/pokeapi'
import { getPokemon , setLoading} from "../../utils/actions"


const Wilderness = () => {
    const { state, dispatch } = useStateContext()
    useEffect(() => {
        getPokemonList(
            (resp) => {
                dispatch(getPokemon(resp))
            }
        )
        dispatch(setLoading(false))
    }, [])
    return (
        <>
            {
                state.loading ? <div>Loading</div> :
                <div>
                    {state.pokemons.map( (pokemons , i) =>{
                        return <h1 key={i}> {pokemons.name} </h1>
                    })}
                </div>
            }
        </>
    )
}

export default Wilderness;
