import styled from '@emotion/styled'

export const Nav = styled.nav`
    background-color: #FF0000;
    display : flex;
    justify-content: space-between;
    padding : 1em;
`

export const Logo = styled.img`
    cursor: pointer;
    width : 5em;

`

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

export const Grid = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2em 2em;
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`

export const Card = styled.div`
    margin: 1rem;
    display: grid;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    flex-basis: 30%;
    padding: 1.5rem 4rem;
    text-align: center;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    &:hover {
        color: #0070f3;
        border-color: #0070f3;
    }
    &:focus {
        color: #0070f3;
        border-color: #0070f3;    
    }
    &:activer {
        color: #0070f3;
        border-color: #0070f3;
    }
`

export const Foot = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    display: inline-block;
    font-size: 1rem;
    background: ff471a;
    font-weight: 700;
    padding: 0.75em 1.5em;
    margin: 0 1em;
    border-radius: 1rem;
    min-width: 10em;
    color: #1a5539;
    text-align: center;
    cursor: pointer;

`

export const ButtonPages = styled.div`
    display: flex;
    padding-bottom: 1.5em;
    justify-content: space-between;

`

export const TabMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: .5em 0;
    display: flex;
    justify-content: space-between;
    color: white;
    li {
        cursor: pointer;
        &:hover {
            filter: brightness(90%);;
        }
        &:focus {
            
            filter: brightness(90%);   
        }
        &:activer {
            
            filter: brightness(90%);
        }
    }
    li:nth-child(2) {
        margin-left: 1em;
    }
`