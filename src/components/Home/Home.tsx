import React from 'react'
import { motion } from 'framer-motion'
import Blob from '../Blob/Blob'
import './Home.scss'

const Home: React.FC = () => {
    return (
        <div
            className='first-view'
            id='home'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} className='intro'>
                <span className='intro__hello'>Hello, my name is</span>
                <h1 className='intro__name'>Krzysztof Burzyński.</h1>
                <span className='intro__occupation'>Beginner front-end developer.</span>
                <p className='intro__description'>Welcome on my website. This is the place where you will find information about me and my path to becoming a front-end developer.</p>
            </motion.div>
            <Blob />
        </div>
    )
}

export default Home