import React, { useState, useEffect } from 'react'
import Loader from './components/Loader/Loader'
import Page from './components/Page/Page'

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 1700)
    })

    return (
        <div className="wrapper">
            {isLoaded ? <Page /> : <Loader />}
        </div>
    )
}

export default App
