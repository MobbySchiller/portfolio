import { FC } from 'react'
import { motion } from 'framer-motion'
import Blob from './Blob/Blob'
import './Home.scss'

const Home: FC = () => {

    return (
        <div
            className='home'
            id='home'>
            <motion.div
                className='intro'
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: .4 }
                }}
            >
                <span className='intro__hello'>Hello, my name is</span>
                <h1 className='intro__name'>Krzysztof Burzyński.</h1>
                <span className='intro__occupation'>Beginner front-end developer.</span>
                <p className='intro__description'>Welcome on my website. This is the place where you will find information about me.</p>
            </motion.div>
            <Blob />
        </div>
    )
}

export default Home