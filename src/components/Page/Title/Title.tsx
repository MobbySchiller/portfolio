import { FC } from 'react'
import { motion } from 'framer-motion'

const Title: FC<{ name: string }> = ({ name }) => {

    return (
        <motion.h2
            className='title'
            initial={{
                opacity: 0,
                x: -50
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: .6 }
            }}
            viewport={{ once: true, amount: 0.8 }}>
            {name}
        </motion.h2>
    )
}

export default Title