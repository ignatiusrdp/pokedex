import React , { useEffect } from  'react'
import Head from 'next/head'
import { useStateContext } from '../../utils/ContextProvider'
import { getPokemonList } from '../../utils/pokeapi'
import { getPokemon , setLoading} from "../../utils/actions"
import Link from 'next/link'
import {Card, Logo, Grid, Container, Button, ButtonPages} from '../../styles/styles'


const Wilderness = () => {
    const { state, dispatch } = useStateContext()
    useEffect(() => {
        const endpoint = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
        getPokemonList(
            (resp) => {
                dispatch(getPokemon(resp))
            }, endpoint
            
        )
        dispatch(setLoading(false))
    }, [])

    const getAnotherList = (link) =>{
        dispatch(setLoading(true))
        getPokemonList(
            (resp) => {
                dispatch(getPokemon(resp))
            }, link
            
        )
        window.scrollTo(0, 0)
        dispatch(setLoading(false))
    }
    return (
        <>
        <Head>
            <title>Wilderness </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            {
                state.loading ? <h1>Loading</h1> :
                <Container>
                    <Grid>
                    {state.pokemons.map( (pokemons , i) =>{
                        var imgUrlId = pokemons.url.split('/')[6]
                        var imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgUrlId}.png`
                        
                        return (
                            <Link href={pokemons.url} key={i}>
                                <Card>
                                    <Logo src={imgUrl} loading="lazy" />
                                    <h3 > {pokemons.name} </h3>
                                </Card>
                            </Link>
                        )
                    })}
                    </Grid>
                    <ButtonPages>
                        {
                            state.prev !== null ?
                            <Button onClick={()=> getAnotherList(state.prev)}>
                                Previous
                            </Button>
                            :
                            <></>
                        }
                        {
                            state.next !== null ?
                            <Button onClick={()=> getAnotherList(state.next)}>
                                Next
                            </Button>
                            :
                            <></>
                        }
                    </ButtonPages>
                </Container>
            }
        </>
    )
}

export default Wilderness;
