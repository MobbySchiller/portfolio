import { FC } from 'react'
import { motion } from 'framer-motion'
import './Description.scss'

const Description: FC = () => {

    return (
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
            <div className='description'>
                <h3 className='subtitle'>Who am I</h3>
                <p className='description__paragraph'>My name is <strong>Krzysztof</strong>. More than six months ago I made the decision to try my hand at programming. After learning the basic front-end technologies, I started creating my first projects.</p>
                <p className='description__paragraph'>At first I was copying already existing page layouts using mainly HTML and CSS. Creating and fine-tuning each project gave me a lot of satisfaction, but also a lot of joy, so I decided to fully dedicate myself to programming and reinvent myself as a programmer.</p>
                <p className='description__paragraph'>As a <strong>self-taught</strong> developer, I am currently expanding my skills in React using TypeScript. In the near future, I plan to deepen my knowledge with back-end technologies. In parallel, <strong>I am looking for my first job</strong> so that I can fully dedicate myself to programming and gain experience working in a team.</p>
            </div>
        </motion.div>
    )
}


export default Description