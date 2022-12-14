import { FC } from 'react'
import SocialsRef from './SocialsRef/SocialsRef'
import './Footer.scss'

const Footer: FC = () => {

    return (
        <footer className='footer'>
            <SocialsRef />
            <div className='credits'>
                <p className='credits__text'>Site designed by <a href='https://github.com/MobbySchiller' className='credits__link'>MobbySchiller</a>.</p>
                <p className='credits__text'>App icon by <a href='https://icons8.com/' className='credits__link'>icons8</a>.</p>
            </div>

        </footer>
    )
}

export default Footer