import './Chart.scss'
import { useSelector } from 'react-redux'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import sass from '../../assets/sass.png'
import redux from '../../assets/redux.png'
import framer from '../../assets/framer.svg'
import { motion } from 'framer-motion'



function Radarchart() {
    const { language } = useSelector((state) => state.lang)

    const hover = {
        scale: 1.15,
    }

    return <div className='outerSkills'>
        <div className='language'>
            <h2 className='language__title'>Languages</h2>
            <motion.div className='Skill language__html' whileHover={hover}>
                <img src={html} alt='html logo' className='Skill__logo' />
            </motion.div>
            <div className='language__htmlbar'></div>
            <div className='language__javabar'></div>
            <div className='language__reactbar'></div>
            <div className='language__cssbar'></div>
            <motion.div className='Skill language__css'  whileHover={hover}>
                <img src={css} alt='css logo' className='Skill__logo' />
            </motion.div>
            <motion.div className='Skill language__javascript'  whileHover={hover}>
                <img src={javascript} alt='javascript logo' className='Skill__logo' />
            </motion.div>
            <motion.div className='Skill language__React'  whileHover={hover}>
                <img src={react} alt='react logo' className='Skill__logo' />
            </motion.div>
            <motion.div className='Skill language__sass'  whileHover={hover}>
                <img src={sass} alt='sass logo' className='Skill__logo' />
            </motion.div>
        </div>
        <div className='otherSkills'>
            <h2 className='otherSkills__title'>{language == 'fr'? 'Bibliothèques React' : 'React libraries' }</h2>
            <div className='block'>
                <motion.div className='Skill block__redux' whileHover={hover}>
                    <img src={redux} alt='redux logo' className='Skill__logo' />
                </motion.div>
                <motion.div className='Skill block__framermotion' whileHover={hover}>
                    <img src={framer} alt='framer logo' className='Skill__logo' />
                </motion.div>
            </div>
            <h2 className='otherSkills__title'>{language == 'fr'? 'Autres Compétences' : 'Other skills' }</h2>
            <div className='block'>
                <motion.div className='Skill block__debugging' whileHover={hover}>
                    <h3 className='Skill__title'>{language == 'fr'? 'Débogage' : 'Debugging' }</h3>
                </motion.div>
                <motion.div className='Skill block__optimization' whileHover={hover}>
                    <h3 className='Skill__title'>SEO</h3>
                </motion.div>
            </div>
        </div>
    </div>
}

export default Radarchart