import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card, Grid, Main } from '../styles/styles'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Pokemon </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1 className={styles.title}>
          Welcome to Pokedex Simulator 
        </h1>

        <p className={styles.description}>
          Created with <a href="https://nextjs.org">Next.js</a> and React Hooks
        
        </p>

        <Grid>
            <Link href='/wilderness'>
              <Card >
                <h3>Wilderness &rarr;</h3>
                <p>catch Pokemon in the wild!</p> 
              </Card>
            </Link>

        
          <Link href="/my-pokedex">  
            <Card>
              <h3>My Pokedex &rarr;</h3>
              <p>Check your Pokedex to see what pokemon you caught!</p>
            </Card>
          </Link>
        
        </Grid>
      </Main>
    </div>
    </>
  )
}
