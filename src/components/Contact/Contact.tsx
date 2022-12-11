import React, { FC, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'

console.log(import.meta.env.VITE_SERVICE_ID)

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

const initialFocused = {
    name: false,
    email: false,
    message: false
}

const nameRegex = "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
const emailRegex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

const Contact: FC = () => {
    const [toSend, setToSend] = useState<Email>(initialEmail)
    const [focused, setFocused] = useState<Focused>(initialFocused)

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
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        setToSend(initialEmail)
        setFocused(initialFocused)
        // console.log(email)
    }

    return (
        <section className='section' id='contact'>
            <h2 className='section__title'>Contact</h2>
            <form
                className='form'
                onSubmit={handleSubmit}>
                <div className="form__input">
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type="text"
                        value={toSend.name}
                        focused={focused.name.toString()}
                        required
                        pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                        className='form__input'
                        onChange={(e) => setToSend({ ...toSend, name: e.target.value })}
                        onBlur={() => setFocused({ ...focused, name: true })} />
                    <span>Invalid name</span>
                </div>
                <div className="form__input">
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type="email"
                        value={toSend.email}
                        focused={focused.email.toString()}
                        required
                        pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                        className='form__input'
                        onChange={(e) => setToSend({ ...toSend, email: e.target.value })}
                        onBlur={() => setFocused({ ...focused, email: true })} />
                    <span>Invalid email address</span>
                </div>
                <div className="form__input">
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        value={toSend.message}
                        focused={focused.message.toString()}
                        required
                        className='form__input'
                        onChange={(e) => setToSend({ ...toSend, message: e.target.value })}
                        onBlur={() => setFocused({ ...focused, message: true })} />
                    <span>Your message is empty</span>
                </div>
                <button
                    type='submit'
                    className='form__button'
                >Send</button>
            </form>
        </section >
    )
}

export default Contact