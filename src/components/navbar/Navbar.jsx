import './navbar.scss'
import logo from '../../assets/Logow.png'
import { motion } from "framer-motion"

function Navbar() {

    return <div className='outbar'>
    <nav className="topbar">
        <div className='topbar__links'>
            <motion.a href='#' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.7, delay:0.05 }}
            >À-propos</motion.a>
            <motion.a href='#' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.75, delay:0.1 }}
            >Portfolio</motion.a>
            <motion.img src={logo} alt='Logo' className='topbar__links__logo' 
                animate={{ rotateZ:[0, 720], scale:[0, 1] }} transition={{ duration:0.5 }}
            />
            <motion.a href='#' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.6, delay:0.15 }}
            >Compétences</motion.a>
            <motion.a href='#' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.65, delay:0.2 }}
            >Contact</motion.a>
        </div>
    </nav>
    </div>
}

export default Navbar