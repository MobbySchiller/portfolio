import React, { useState } from 'react'
import { State } from '../Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

const Nav: React.FC<{ state: State }> = ({ state }) => {
    const { navIsActive, setNavIsActive } = state

    const handleHamburger = (): void => setNavIsActive(!navIsActive)

    return (
        <nav>
            <div className='hamburger' onClick={handleHamburger}>
                {navIsActive ?
                    <FontAwesomeIcon icon={faXmark} className='hamburger__xmark' />
                    :
                    <FontAwesomeIcon icon={faBars} className='hamburger__bars' />}
            </div>
            {navIsActive &&
                <ul className='nav__list'>
                    <li className='nav__element'><a href="#about" className='nav__link'>about</a></li>
                    <li className='nav__element'><a href="#projects" className='nav__link'>projects</a></li>
                    <li className='nav__element'><a href="#contact" className='nav__link'>contact</a></li>
                    <li className='nav__element'><a href="#resume" className='nav__link'>resume</a></li>
                </ul>
            }
        </nav>
    )
}

export default Nav