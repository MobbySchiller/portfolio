import { FC, useState } from 'react'
import Nav from './Nav/Nav'
import './Header.scss'

const Header: FC = () => {
    const [isHeaderTransparent, setIsHeaderTransparent] = useState<boolean>(true)
    const logo: string = '<kb/>'

    window.addEventListener('scroll', (): void => setIsHeaderTransparent(window.scrollY === 0))

    return (
        <header
            className={`header ${isHeaderTransparent ? '' : 'header--visible'}`}>
            <div className='logo'>
                <a href='/' className='logo__sign'>{logo}</a>
            </div>
            <Nav />
        </header >
    )
}

export default Header