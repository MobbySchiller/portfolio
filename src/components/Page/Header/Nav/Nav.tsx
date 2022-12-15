import { FC, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-scroll'
import './Nav.scss'

const Nav: FC = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false)
    const sections: string[] = ['home', 'about', 'projects', 'contact']

    const framerList: Variants = {
        visible: {
            transition: { staggerChildren: .1 }
        }
    }

    const framerElement: Variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: '100%' },
    }

    const navElements: JSX.Element[] = sections.map((section, index) => (
        <motion.li
            key={`nav-element-${index}`}
            variants={framerElement}
            className='nav__element'>
            <Link
                to={section}
                spy={true}
                offset={-80}
                smooth={true}
                duration={400}
                activeClass='nav__link--active'
                href='/'
                className=' nav__link'
                onClick={() => setIsNavActive(!isNavActive)}
            >{section}
            </Link>
        </motion.li>
    ))

    return (
        <nav>
            <div
                className='nav-btn'
                onClick={() => setIsNavActive(!isNavActive)}>
                <input
                    type='checkbox'
                    className='nav-btn__checkbox'
                    aria-label='hamburger'
                    readOnly
                    checked={isNavActive}
                />
                <div className='nav-btn__bun'>
                    <div className='nav-btn__hamburger'></div>
                </div>
            </div>
            <div
                className={`nav__background ${isNavActive ? 'nav__background--active' : ''}`}
                onClick={() => setIsNavActive(!isNavActive)}>
            </div>
            <motion.ul
                variants={framerList}
                initial='hidden'
                animate='visible'
                className={`nav__list ${isNavActive ? 'nav__list--active' : ''}`}>
                {navElements}
            </motion.ul>
        </nav >
    )
}

export default Nav