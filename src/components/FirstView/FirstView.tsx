import React from 'react'
import { motion } from 'framer-motion'
import './FirstView.scss'

const FirstView: React.FC = () => {
    return (
        <div
            className='first-view'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} className='intro'>
                <span className='intro__hello'>Hello, my name is</span>
                <h1 className='intro__name'>Krzysztof Burzyński.</h1>
                <span className='intro__occupation'>Beginner front-end developer.</span>
                <p className='intro__description'>Welcome on my website. This is the place where you will find information about me and my path to becoming a front-end developer.</p>
            </motion.div>
        </div>
    )
}

export default FirstView