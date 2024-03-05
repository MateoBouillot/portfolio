import Navbar from '../../components/navbar/Navbar'
import Apropos from '../../components/A-propos/aPropos'
import Portfolio from '../../components/portfolio/Portfolio'
import Radarchart from '../../components/Chart/Chart'
import Form from '../../components/Form/Form'
import './homepage.scss'

function Homepage() {

    return <>
        <Navbar />
        <Apropos />
        <Portfolio />
        <Radarchart />
        <Form />
    </>
}

export default Homepage