import React from 'react'
import { Foot , Logo } from '../styles/styles'

const Footer = () => {
    return (
        <Foot>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <Logo src="/vercel.svg" alt="Vercel Logo"/>
            </a>
        </Foot>
    )
}

export default Footer
