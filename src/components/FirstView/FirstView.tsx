import React from 'react'
import './FirstView.scss'

const FirstView: React.FC = () => {
    return (
        <div className='first-view'>
            <div className='intro'>
                <span className='intro__hello'>Hello, my name is</span>
                <h1 className='intro__name'>Krzysztof Burzyński.</h1>
                <span className='intro__occupation'>Beginner front-end developer.</span>
            </div>
        </div>
    )
}

export default FirstView