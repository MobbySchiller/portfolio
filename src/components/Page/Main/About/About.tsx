import { FC } from 'react'
import Title from '../../Title/Title'
import Photo from './Photo/Photo'
import Description from './Description/Description'
import Technologies from './Technologies/Technologies'
import './About.scss'

const About: FC = () => {
    return (
        <section className='section' id='about'>
            <Title name='about' />
            <section className='about section__wrapper'>
                <Photo />
                <Description />
                <Technologies />
            </section>
        </section >
    )
}

export default About