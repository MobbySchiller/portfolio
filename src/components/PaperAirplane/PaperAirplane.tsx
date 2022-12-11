import { FC } from 'react'
import './PaperAirplane.scss'

const PaperAirplane: FC = () => {
    return (
        <div className="paperplane">
            <div className="plane">
                <div className="plane__wingRight"></div>
                <div className="plane__wingLeft"></div>
                <div className="plane__bottom"></div>
                <div className="plane__top"></div>
                <div className="plane__middle"></div>
            </div>
        </div>
    )
}

export default PaperAirplane