import React, { useState, useLayoutEffect, useEffect } from 'react'
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
    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true)
    const [navIsActive, setNavIsActive] = useState<boolean>(false)
    const logo = '<kb/>'

    window.addEventListener('scroll', () => setIsHeaderVisible(window.scrollY < 400))

    window.addEventListener('resize', () => window.innerWidth >= Breakpoint.Smartphone ? setNavIsActive(true) : setNavIsActive(false))

    useLayoutEffect(() => {
        window.innerWidth >= Breakpoint.Smartphone ? setNavIsActive(true) : setNavIsActive(false)
    }, [])

    return (
        <header
            style={isHeaderVisible ? { top: 0 } : { top: '-60px' }}
            className={`header ${navIsActive ? 'header--active-nav' : ''}`}>
            <div className='logo'>
                <a href='/' className='logo__sign'>{logo}</a>
            </div>
            <Nav state={{ navIsActive, setNavIsActive }} />
        </header >
    )
}

export default Header