import { FC } from 'react'
import { motion } from 'framer-motion'
import './Photo.scss'

const Photo: FC = () => {

    return (
        <div className='photo'>
            <motion.div
                className='photo__wrapper'
                initial={{ width: 0 }}
                whileInView={{
                    width: '100%',
                    transition: {
                        duration: .4,
                        delay: .4
                    }
                }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <picture>
                    <source media="(max-width: 992px)" srcSet="assets/about/me-225.webp" />
                    <source media="(min-width: 993px)" srcSet="assets/about/me-350.webp" />
                    <motion.img
                        src="assets/about/me-350.webp"
                        alt="Picture of me"
                        className='photo__img'
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: .2,
                                delay: .8
                            }
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                        loading='lazy' />
                </picture>
            </motion.div>
        </div>
    )
}

export default Photo