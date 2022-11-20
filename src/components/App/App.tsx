import React, { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1700)
  })

  return (
    <div className="wrapper">
      {isLoaded ? 'page' : <Loader />}
    </div>
  )
}

export default App
