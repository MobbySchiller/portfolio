import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Loader.scss'

const Loader: React.FC = () => {
    const [letterId, setLetterId] = useState<number>(0)
    const [loaderText, setLoaderText] = useState<string>('')
    const logo: string = '<kb/>'

    const framerText = {
        visible: { opacity: 1 },
        hidden: {
            opacity: 0,
            transition: { duration: .6 }
        }
    }

    const typeLogo = () => {
        if (loaderText === logo) return
        setLoaderText(loaderText + logo[letterId])
        setLetterId(letterId + 1)
    }

    useEffect((): void => {
        setTimeout(typeLogo, 200)
    }, [loaderText])

    return (
        <div className='loader'>
            <motion.div
                variants={framerText}
                animate={loaderText === logo ? 'hidden' : 'visible'}
                className='loader__container'>
                <span className='loader__logo'>{loaderText}</span>
            </motion.div>
        </div>
    )
}

export default Loader