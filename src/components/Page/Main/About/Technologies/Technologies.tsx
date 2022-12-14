import { FC } from 'react'
import { motion } from 'framer-motion'
import TechnologiesCarousel from './TechnologiesCarousel/TechnologiesCarousel'
import './Technologies.scss'

const Technologies: FC = () => {

    return (
        <motion.div
            className='technologies'
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
    )
}

export default Technologies