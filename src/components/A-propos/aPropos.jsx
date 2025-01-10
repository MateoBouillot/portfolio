import './aPropos.scss'
import { motion } from "framer-motion"
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import CSharp from '../../assets/CSharp.png'
import Lua from '../../assets/Lua.png'
import projetweb from '../../assets/Projet-web.pdf'
import projetgamedev from '../../assets/Projet-game-dev.pdf'
import { frTopRightTxt, frTopLeftTxt, enTopRightTxt, enTopLeftTxt, frBottomRightTxt, enBottomRightTxt } from '../../assets/texts'
import { useSelector } from 'react-redux'



function Apropos() {

    const { language } = useSelector((state) => state.lang)
    let topRightTxt = language == 'fr'? frTopRightTxt : enTopRightTxt
    let bottomRightTxt = language == 'fr'? frBottomRightTxt : enBottomRightTxt
    let topLeftTxt = language == 'fr'? frTopLeftTxt : enTopLeftTxt

    return <section id='about' >
        <a 
            href={projetweb}    
            className="hidden-pdf" 
            aria-hidden="true" 
            tabIndex="-1"
            style={{ 
                position: 'absolute', 
                width: '1px', 
                height: '1px', 
                padding: '0', 
                margin: '-1px', 
                overflow: 'hidden', 
                clip: 'rect(0,0,0,0)', 
                border: '0' 
            }}
        >Hidden PDF</a>
        <a 
            href={projetgamedev}    
            className="hidden-pdf" 
            aria-hidden="true" 
            tabIndex="-1"
            style={{ 
                position: 'absolute', 
                width: '1px', 
                height: '1px', 
                padding: '0', 
                margin: '-1px', 
                overflow: 'hidden', 
                clip: 'rect(0,0,0,0)', 
                border: '0' 
            }}
        >Hidden PDF</a>
        <article className='aboutTop' >
            <motion.div className='aboutTop__textLeft'
                animate={{ clipPath: ['polygon(0 0, 0 0, 0 100%, 0% 100%)', 'polygon(0 0, 70% 0, 70% 100%, 0 100%)', 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            > 
                <div className='aboutTop__textLeft__texts'>
                    <h1 className='aboutTop__textLeft__title'>{topLeftTxt.title1}</h1>
                    <h2 className='aboutTop__textLeft__title2'>{topLeftTxt.title2}</h2>
                    <h2 className='aboutTop__textLeft__title3'>{topLeftTxt.title3}</h2>
                    <h3 className='aboutTop__textLeft__subtitle'>{topLeftTxt.subtitle1}<br/>{topLeftTxt.subtitle2}</h3>
                    <p className='aboutTop__textLeft__txt1'>{topLeftTxt.txt1}</p>
                    <p className='aboutTop__textLeft__txt2'>{topLeftTxt.txt21}<br/>{topLeftTxt.txt22}</p>
                </div>
            </motion.div>
            <motion.div className='aboutTop__textRight'
                animate={{ clipPath: ['polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', 'polygon(30% 0, 100% 0, 100% 100%, 30% 100%)', 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            >
                <div className='aboutTop__textRight__texts'>
                    <h2 className='aboutTop__textRight__title'>{topRightTxt.title1}<br/>{topRightTxt.title2}</h2>
                    <h3 className='aboutTop__textRight__subtitle'>{topRightTxt.subtitle1}<br/>{topRightTxt.subtitle2}</h3>
                    <p className='aboutTop__textRight__txt2'>{topRightTxt.txt21}<br/>{topRightTxt.txt22}<br/>{topRightTxt.txt23}</p>
                    <p className='aboutTop__textRight__txt3'>{topRightTxt.txt31}<br/>{topRightTxt.txt32}<br/>{topRightTxt.txt33}</p>
                </div>
            </motion.div>
        </article>
        <article className='aboutBottom'>
            <motion.div className='aboutBottom__img'
                animate={{ clipPath: ['polygon(0 0, 0 0, 0 100%, 0% 100%)', 'polygon(0 0, 70% 0, 70% 100%, 0 100%)', 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            >
                <motion.div 
                    animate={{ rotate: 360}}
                    transition={{ duration: 6, times: [0, 0.2, 0.5, 0.8, 1], ease: 'linear', repeat: Infinity, delay: 1 }}
                    style={{ originX: 0.5, originY: 0.5 }}
                    className='atome'>
                    <div className='test'></div>
                    <motion.div className='atome__css'
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className='logo second' src={css} alt='logo css' />
                    </motion.div>
                    
                    <motion.div className='atome__html'
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className='logo third' src={html} alt='logo html' />
                    </motion.div>
                    
                    <motion.div className='atome__javascript'
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img  className='logo fourth' src={javascript} alt='logo javascript' />
                    </motion.div>
                   
                    <motion.div className='atome__react'
                         animate={{ rotate: -360 }}
                         transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className='logo sixth' src={react} alt='logo react' />
                    </motion.div>
                    
                    <motion.div className='atome__CSharp'
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className='logo fifth' src={CSharp} alt='logo CSharp' />
                    </motion.div>
                    
                    <motion.div className='atome__lua'
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: 1 }}>
                        <img className='logo seventh' src={Lua} alt='logo lua' />
                    </motion.div>
                    
                </motion.div>
            </motion.div>
            <motion.div className='aboutBottom__textRight'
                animate={{ clipPath: ['polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', 'polygon(30% 0, 100% 0, 100% 100%, 30% 100%)', 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            >
                <div className='aboutBottom__textRight__texts'>
                    <h2 className='aboutBottom__textRight__title'>{bottomRightTxt.title1}<br/>{bottomRightTxt.title2}</h2>
                    <h3 className='aboutBottom__textRight__subtitle'>{bottomRightTxt.subtitle1}<br/>{bottomRightTxt.subtitle2}</h3>
                    <p className='aboutBottom__textRight__txt1'>{bottomRightTxt.txt11}<br/>{bottomRightTxt.txt12}</p>
                    <p className='aboutBottom__textRight__txt2'>{bottomRightTxt.txt21}<br/>{bottomRightTxt.txt22}</p>
                    <p className='aboutBottom__textRight__txt3'>{bottomRightTxt.txt3}</p>
                </div>
            </motion.div>
        </article>
    </section>
}

export default Apropos
