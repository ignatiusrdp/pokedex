import React from 'react'
import Link from 'next/link'
import { Nav, Logo, TabMenu } from '../styles/styles'

const Navbar = () => {
    return (
        <Nav>
            <Link href='/'>
                <Logo src="/pokedex_logo.png" />
            </Link>
            <TabMenu>
                <li>
                    <Link href='/wilderness'>
                        Wilderness
                    </Link>
                </li>
                <li>
                    <Link href='/my-pokedex'>
                    My Pokedex
                    </Link>
                </li>
            </TabMenu>
        </Nav>
    )
}

export default Navbar
