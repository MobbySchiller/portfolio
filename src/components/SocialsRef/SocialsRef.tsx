import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, Variants } from 'framer-motion'
import { socials } from '../../data'
import './SocialsRef.scss'

const SocialsRef: FC = () => {

    const framerSocials: Variants = {
        visible: {
            transition: { staggerChildren: .1 }
        }
    }

    const framerLink: Variants = {
        visible: {
            x: 0,
            transition: {
                delay: .8
            }
        },
        hidden: { x: '100' }
    }

    const platforms = socials.map((social, index) => {
        const { link, icon } = social
        return (
            <motion.a
                key={`social-${index}`}
                href={link}
                variants={framerLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='socials__link' >
                <FontAwesomeIcon icon={icon} className='socials__icon' />
            </motion.a >
        )
    })

    return (
        <motion.div
            variants={framerSocials}
            initial='hidden'
            animate='visible'
            className='socials' >
            {platforms}
        </motion.div >
    )
}

export default SocialsRef