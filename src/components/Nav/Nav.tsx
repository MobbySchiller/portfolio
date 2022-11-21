import React from 'react'
import { motion } from 'framer-motion'
import { State } from '../Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

const Nav: React.FC<{ state: State }> = ({ state }) => {
    const { navIsActive, setNavIsActive } = state
    const handleHamburger = (): void => setNavIsActive(!navIsActive)

    const sections = ['about', 'projects', 'contact', 'resume']

    const framerList = {
        visible: {
            transition: { staggerChildren: .1 }
        }
    }

    const framerElement = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: '100%' },
        whileHover: { scale: 1.2 }
    }

    const navElements = sections.map(section => (
        <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            variants={framerElement}
            className='nav__element'><a href={`#${section}`} className='nav__link'>{section}</a></motion.li>
    ))

    return (
        <nav>
            <div className='hamburger' onClick={handleHamburger}>
                {navIsActive ?
                    <FontAwesomeIcon icon={faXmark} className='hamburger__xmark' />
                    :
                    <FontAwesomeIcon icon={faBars} className='hamburger__bars' />}
            </div>
            {navIsActive &&
                <motion.ul
                    variants={framerList}
                    initial='hidden'
                    animate='visible'
                    className='nav__list'>
                    {navElements}
                </motion.ul>
            }
        </nav>
    )
}

export default Nav