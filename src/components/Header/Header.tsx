import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

enum Breakpoint {
    Smartphone = 576
}

export interface State {
    navIsActive: boolean
    setNavIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC = () => {
    const [navIsActive, setNavIsActive] = useState<boolean>(false)
    const logo = '<kb/>'

    window.addEventListener('resize', () => window.innerWidth >= Breakpoint.Smartphone ? setNavIsActive(true) : setNavIsActive(false))

    useEffect(() => {
        window.innerWidth >= Breakpoint.Smartphone ? setNavIsActive(true) : setNavIsActive(false)
    }, [])


    return (
        <header
            className={navIsActive ? 'header header--active-nav' : 'header'}>
            <div className='logo'>
                <a href='/' className='logo__sign'>{logo}</a>
            </div>
            <Nav state={{ navIsActive, setNavIsActive }} />
        </header >
    )
}

export default Header