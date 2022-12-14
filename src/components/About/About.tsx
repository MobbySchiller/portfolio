import { FC } from 'react'
import { motion } from 'framer-motion'
import TechnologiesCarousel from '../TechnologiesCarousel/TechnologiesCarousel'
import './About.scss'


const About: FC = () => {
    return (
        <section className='section' id='about'>
            <motion.h2
                className='title'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: .6 } }}
                viewport={{ once: true, amount: 0.8 }}>
                About
            </motion.h2>
            <div className='about section__wrapper'>
                <div className='about__photo'>
                    <motion.div
                        className='photo-wrapper'
                        initial={{ width: 0 }}
                        whileInView={{
                            width: '100%',
                            transition: { duration: .4, delay: .4 }
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <picture>
                            <source media="(max-width: 992px)" srcSet="assets/about/me-225.webp" />
                            <source media="(min-width: 993px)" srcSet="assets/about/me-350.webp" />
                            <motion.img src="assets/about/me-350.webp" alt="Picture of me" className='photo' initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: { duration: .2, delay: .8 }
                                }}
                                viewport={{ once: true, amount: 0.8 }} />
                        </picture>
                    </motion.div>
                </div>
                <motion.div
                    className='about__description'
                    initial={{
                        opacity: 0,
                        y: 70,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.2,
                        }
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className='subtitle'>Who am I</h3>
                    <p className='about__paragraph'>My name is <strong>Krzysztof</strong>. More than six months ago I made the decision to try my hand at programming. After learning the basic front-end technologies, I started creating my first projects.</p>
                    <p className='about__paragraph'>At first I was copying already existing page layouts using mainly HTML and CSS. Creating and fine-tuning each project gave me a lot of satisfaction, but also gave me a lot of joy, so I decided to fully <strong>rebrand myself as a programmer</strong> and continue developing in this direction.</p>
                    <p className='about__paragraph'>As a <strong>self-taught</strong> developer, I am currently expanding my skills in React using TypeScript. In the near future, I plan to deepen my knowledge with back-end technologies. In parallel, <strong>I am looking for my first job</strong> so that I can fully dedicate myself to programming and gain experience working in a team.</p>
                </motion.div>
                <motion.div
                    className='about__technologies'
                    initial={{
                        opacity: 0,
                        y: 70,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6
                        }
                    }}
                    viewport={{ once: true, amount: 0.6 }}>
                    <h3 className='subtitle'>Technologies I use</h3>
                    <TechnologiesCarousel />
                </motion.div>
            </div>
        </section >
    )
}

export default About