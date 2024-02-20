import Navbar from '../../components/navbar/Navbar'
import Apropos from '../../components/A-propos/aPropos'
import Portfolio from '../../components/portfolio/Portfolio'
import './homepage.scss'

function Homepage() {

    return <>
        <Navbar />
        <Apropos />
        <Portfolio />
    </>
}

export default Homepage