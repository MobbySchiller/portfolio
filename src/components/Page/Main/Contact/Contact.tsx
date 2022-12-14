import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import Title from '../../Title/Title'
import Form from './Form/Form'
import PaperAirplane from './PaperAirplane/PaperAirplane'
import StatusPopup from './StatusPopup/StatusPopup'
import './Contact.scss'

export interface ToSend {
    name: string
    email: string
    message: string
}

export const initialToSend = {
    name: '',
    email: '',
    message: ''
}

const Contact: FC = () => {
    const [toSend, setToSend] = useState<ToSend>(initialToSend)
    const [isSent, setIsSent] = useState<boolean>(false)
    const [sentSuccess, setSentSuccess] = useState<boolean>(true)

    return (
        <section className='section' id='contact'>
            <Title name='contact' />
            <motion.div
                className='contact section__wrapper'
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
                viewport={{ once: true, amount: 0.2 }}>
                <div className='contact__wrapper'>
                    <Form contactProps={{ toSend, setToSend, setIsSent, setSentSuccess }} />
                    <div className='paperplane-wrapper'>
                        <PaperAirplane status={isSent} />
                        {isSent && <StatusPopup status={sentSuccess} />}
                    </div>
                </div>
            </motion.div>
        </section >
    )
}

export default Contact