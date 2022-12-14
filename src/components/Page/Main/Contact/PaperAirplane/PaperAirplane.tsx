import { FC } from 'react'
import { motion, Variants } from 'framer-motion'
import './PaperAirplane.scss'

const PaperAirplane: FC<{ status: boolean }> = ({ status }) => {
    const paperplane: Variants = {
        stay: {
            x: 0,
            y: 0
        },
        fly: {
            x: '50vw',
            y: -170,
            transition: {
                duration: .6
            }
        }
    }

    return (
        <div className='paperplane-wrapper'>
            <motion.div
                className="paperplane"
                variants={paperplane}
                initial='stay'
                animate={status ? 'fly' : 'stay'}>
                <div className="plane">
                    <div className="plane__wingRight"></div>
                    <div className="plane__wingLeft"></div>
                    <div className="plane__bottom"></div>
                    <div className="plane__top"></div>
                    <div className="plane__middle"></div>
                </div>
            </motion.div>
        </div >
    )
}

export default PaperAirplane