import { FC } from 'react'
import { ToSend, initialToSend } from '../Contact'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Form.scss'

const namePattern = "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"

const emailPattern = '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'

interface ContactProps {
    toSend: ToSend
    setToSend: React.Dispatch<React.SetStateAction<ToSend>>
    setIsSent: React.Dispatch<React.SetStateAction<boolean>>
    setSentSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const Form: FC<{ contactProps: ContactProps }> = ({ contactProps }) => {
    const { toSend, setToSend, setIsSent, setSentSuccess } = contactProps

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
        setToSend(initialToSend)
        setIsSent(true)
        setTimeout(() => setIsSent(false), 2000)
    }

    return (
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
                    pattern={namePattern}
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
                    pattern={emailPattern}
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
    )
}

export default Form