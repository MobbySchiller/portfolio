import { FC } from 'react'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import './Main.scss'

const Main: FC = () => {

    return (
        <main className="container">
            <About />
            <Projects />
            <Contact />
        </main>
    )
}

export default Main