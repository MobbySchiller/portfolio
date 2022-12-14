import { FC } from 'react'
import { motion } from 'framer-motion'
import './Blob.scss'

const Blob: FC = () => {

    return (
        <motion.div
            className='blob'
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: .3 }
            }}
        ></motion.div>
    )
}

export default Blob