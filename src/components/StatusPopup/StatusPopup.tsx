import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './StatusPopup.scss'

const StatusPopup: FC<{ status: boolean }> = ({ status }) => {

    return (
        <div className={`status-popup ${status ? 'status-popup--success' : 'status-popup--failed'}`}>
            <div className='status-popup__icon'>
                {status ?
                    <FontAwesomeIcon icon={faCircleCheck} className='status-popup__icon status-popup__icon--success' />
                    :
                    <FontAwesomeIcon icon={faCircleXmark} className='status-popup__icon status-popup__icon--failed' />}
            </div>
            <span className='status-popup__text'>{status ? 'Your message has been sent successfully!' : 'Failed! Your message has not been sent!'}</span>
        </div >
    )
}

export default StatusPopup