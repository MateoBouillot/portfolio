import './navbar.scss'
import logo from '../../assets/Logow.png'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { english, francais } from '../../redux/langSlice'
import { useState } from 'react'

function Navbar() {
    const { language } = useSelector((state) => state.lang)
    const dispatch = useDispatch()
    const [btnPos, setBtnPos] = useState(45)



    const handleClick = () => {
        if (language === 'fr') {
            dispatch(english())
            setBtnPos(65)
        } else {
            dispatch(francais())
            setBtnPos(45)
        }
    }

    return <div className='outbar'>
    <nav className="topbar">
        <div className='topbar__btn' onClick={handleClick}>
            <p className='topbar__btn__txt'>fr</p>
            <div className='topbar__btn__back'></div>
            <motion.div className='topbar__btn__circle'
                animate={{ left: btnPos }}
            >
                <div className='innercircle'></div>
            </motion.div>
            <p className='topbar__btn__txt'>en</p>
        </div>
        <div className='topbar__links' >
            <motion.a href='#about' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.7, delay:0.05 }}
            >{language == 'fr'? 'À-propos' : 'About' }</motion.a>
            <motion.a href='#portfolio' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.75, delay:0.1 }}
            >Portfolio</motion.a>
            <motion.img src={logo} alt='Logo' className='topbar__links__logo' 
                animate={{ rotateZ:[0, 720], scale:[0, 1] }} transition={{ duration:0.5 }}
            />
            <motion.a href='#skills' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.6, delay:0.15 }}
            >{ language == 'fr'? 'Compétences' : 'Skills' }</motion.a>
            <motion.a href='#contact' className='topbar__links__link'
                animate={{y:50}} transition={{ type:"spring", bounce:0.65, delay:0.2 }}
            >Contact</motion.a>
        </div>
        <div></div>
    </nav>
    </div>
}

export default Navbar