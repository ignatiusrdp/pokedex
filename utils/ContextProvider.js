import React, {createContext, useContext, useReducer} from 'react'
import stateReducer from './reducer'

const initialState = {
    pokemons : [],
    next : "",
    prev : "",
    loading : true,
}

const Context = createContext()

const useStateContext = () =>{
    return useContext(Context)
}

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(stateReducer, initialState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}


export {ContextProvider, useStateContext};
