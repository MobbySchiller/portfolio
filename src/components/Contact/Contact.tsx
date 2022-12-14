import React, { FC, useState, FocusEvent } from 'react'
import PaperAirplane from '../PaperAirplane/PaperAirplane'
import { motion, Variants } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.scss'
import StatusPopup from '../StatusPopup/StatusPopup'

interface Email {
    name: string
    email: string
    message: string
}

interface Focused {
    name: boolean
    email: boolean
    message: boolean
}

const initialEmail = {
    name: '',
    email: '',
    message: ''
}

const nameRegex = "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
const emailRegex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

const Contact: FC = () => {
    const [toSend, setToSend] = useState<Email>(initialEmail)
    const [isSent, setIsSent] = useState<boolean>(false)
    const [sentSuccess, setSentSuccess] = useState<boolean>(true)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        const { name, email, message } = toSend
        e.preventDefault()
        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            { name, email, message },
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(function (response) {
                setSentSuccess(true)
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                setSentSuccess(false)
                console.log('FAILED...', error);
            });
        setToSend(initialEmail)
        setIsSent(true)
        setTimeout(() => setIsSent(false), 2000)
    }

    const cardVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 70,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.6
            }
        }
    }

    return (
        <section className='section' id='contact'>
            <motion.h2 className='title'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: .6 } }}
                viewport={{ once: true, amount: 0.8 }}>
                Contact
            </motion.h2>
            <motion.div
                className='contact section__wrapper'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}>
                <motion.div className='contact__wrapper' variants={cardVariants}>
                    <form
                        className='form'
                        onSubmit={handleSubmit}>
                        <div className="form__input">
                            <label htmlFor='name'>Name:</label>
                            <input
                                id='name'
                                type="text"
                                value={toSend.name}
                                required
                                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                                className='form__input'
                                onChange={(e) => setToSend({ ...toSend, name: e.target.value })} />
                            <span>Invalid name</span>
                        </div>
                        <div className="form__input">
                            <label htmlFor='email'>Email:</label>
                            <input
                                id='email'
                                type="email"
                                value={toSend.email}
                                required
                                pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                                className='form__input'
                                onChange={(e) => setToSend({ ...toSend, email: e.target.value })} />
                            <span>Invalid email address</span>
                        </div>
                        <div className="form__input">
                            <label htmlFor='message'>Message:</label>
                            <textarea
                                id='message'
                                name='message'
                                value={toSend.message}
                                required
                                className='form__input'
                                onChange={(e) => setToSend({ ...toSend, message: e.target.value })} />
                            <span>Your message is empty</span>
                        </div>
                        <motion.button
                            type='submit'
                            className='form__button'
                            whileTap={{ scale: 0.95 }}
                        >Send
                        </motion.button>
                    </form>
                    <div className='paperplane-wrapper'>
                        <PaperAirplane status={isSent} />
                        {isSent && <StatusPopup status={sentSuccess} />}
                    </div>
                </motion.div>
            </motion.div>
        </section >
    )
}

export default Contact