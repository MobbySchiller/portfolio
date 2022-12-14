import { FC } from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const Page: FC = () => {
    return (
        <>
            <Header />
            <Home />
            <Main />
            <Footer />
        </>
    )
}

export default Page