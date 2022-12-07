import React, { useState, useLayoutEffect } from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

enum Breakpoint {
    Smartphone = 576
}

export interface State {
    navIsActive: boolean
    setNavIsActive: React.Dispatch<React.SetStateAction<boolean>>
    isDesktop: boolean
}

const Header: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>(true)
    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true)
    const [navIsActive, setNavIsActive] = useState<boolean>(false)
    const logo = '<kb/>'

    window.addEventListener('scroll', () => setIsHeaderVisible(window.scrollY < window.innerHeight - 200))

    window.addEventListener('resize', () => {
        setNavIsActive(window.innerWidth >= Breakpoint.Smartphone)
        setIsDesktop(window.innerWidth >= Breakpoint.Smartphone)
    })

    useLayoutEffect(() => {
        setNavIsActive(window.innerWidth >= Breakpoint.Smartphone)
        setIsDesktop(window.innerWidth >= Breakpoint.Smartphone)
    }, [])

    return (
        <header
            style={
                isHeaderVisible ? { top: 0 } : { top: '-60px' }
            }
            className={`header ${navIsActive ? 'header--active-nav' : ''}`}>
            <div className='logo'>
                <a href='/' className='logo__sign'>{logo}</a>
            </div>
            <Nav state={{ navIsActive, setNavIsActive, isDesktop }} />
        </header >
    )
}

export default Header