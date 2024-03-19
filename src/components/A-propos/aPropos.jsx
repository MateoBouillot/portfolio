import './aPropos.scss'
import { motion } from "framer-motion"
import OC from '../../assets/OpenClassroom.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import sass from '../../assets/sass.png'
import redux from '../../assets/redux.png'
import matrice from '../../assets/matrice.jpg'
import { frBottomRightTxt, frTopLeftTxt, enBottomRightTxt, enTopLeftTxt } from '../../assets/texts'
import { useSelector } from 'react-redux'



function Apropos() {

    const { language } = useSelector((state) => state.lang)
    let bottomRightTxt = language == 'fr'? frBottomRightTxt : enBottomRightTxt
    let topLeftTxt = language == 'fr'? frTopLeftTxt : enTopLeftTxt

    return <section id='about' >
        <article className='about' >
            <motion.div className='about__text'
                animate={{ clipPath: ['polygon(0 0, 0 0, 0 100%, 0% 100%)', 'polygon(0 0, 70% 0, 70% 100%, 0 100%)', 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            > 
                <h1 className='about__text__title'>{topLeftTxt.title1}<br/>{topLeftTxt.title2}</h1>
                <h2 className='about__text__subtitle' >{topLeftTxt.subtitle1}<br/>{topLeftTxt.subtitle2}</h2>
                <p className='about__text__txt1'>{topLeftTxt.txt1}</p>
                <p className='about__text__txt2'>{topLeftTxt.txt21}<br/>{topLeftTxt.txt22}</p>
                <p className='about__text__txt3'>{topLeftTxt.txt3}</p>
            </motion.div>
            <motion.div className='about__img'
                animate={{ clipPath: ['polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', 'polygon(30% 0, 100% 0, 100% 100%, 30% 100%)', 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            >
                <img className='matrice' src={matrice} alt='matrice' />
            </motion.div>
        </article>
        <article className='aboutb'>
            <motion.div className='aboutb__img'
                animate={{ clipPath: ['polygon(0 0, 0 0, 0 100%, 0% 100%)', 'polygon(0 0, 70% 0, 70% 100%, 0 100%)', 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            >
                <motion.div 
                    animate={{ rotate: 360, y: [0, -10, 0, 10, 0], x: [0, -10, 10, -10, 0]  }}
                    transition={{ duration: 6, times: [0, 0.2, 0.5, 0.8, 1], ease: 'linear', repeat: Infinity, delay: 1 }}
                    style={{ originX: 0.42, originY: 0.48 }}
                className='atome'>
                    <div className='test' ></div>
                    <motion.div className='atome__openclassrooms '
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className='logo first' src={OC} alt='logo openclassrooms' />
                    </motion.div>
                    <motion.div className='atome__css '
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6,  ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className=' logo second' src={css} alt='logo css' />
                    </motion.div>
                    
                    <motion.div className='atome__html '
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className=' logo third' src={html} alt='logo html' />
                    </motion.div>
                    
                    <motion.div className='atome__javascript '
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img  className=' logo fourth' src={javascript} alt='logo javascript' />
                    </motion.div>
                   
                    <motion.div className='atome__react '
                         animate={{ rotate: -360 }}
                         transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className=' logo sixth' src={react} alt='logo react' />
                    </motion.div>
                    
                    <motion.div className='atome__sass '
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className=' logo fifth' src={sass} alt='logo sass' />
                    </motion.div>
                    
                    <motion.div className='atome__redux '
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className=' logo seventh' src={redux} alt='logo redux' />
                    </motion.div>
                    
                </motion.div>
            </motion.div>
            <motion.div className='aboutb__text'
                animate={{ clipPath: ['polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', 'polygon(30% 0, 100% 0, 100% 100%, 30% 100%)', 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            >
                <h2 className='aboutb__text__title'>{bottomRightTxt.title1}<br/>{bottomRightTxt.title2}</h2>
                <h3 className='aboutb__text__subtitle'>{bottomRightTxt.subtitle1}<br/>{bottomRightTxt.subtitle2}</h3>
                <p className='aboutb__text__txt2'>{bottomRightTxt.txt21}<br/>{bottomRightTxt.txt22}</p>
                <p className='aboutb__text__txt3'>{bottomRightTxt.txt31}<br/>{bottomRightTxt.txt32}<br/>{bottomRightTxt.txt33}</p>
            </motion.div>
        </article>
    </section>
}

export default Apropos
