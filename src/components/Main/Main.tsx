import { FC } from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import './Main.scss'

const Main: FC = () => {

    return (
        <main className="container">
            <About />
            <Projects />
        </main>
    )
}

export default Main