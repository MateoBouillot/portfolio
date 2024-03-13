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



function Apropos() {


    return <section id='about' >
        <article className='about' >
            <motion.div className='about__text'
                animate={{ clipPath: ['polygon(0 0, 0 0, 0 100%, 0% 100%)', 'polygon(0 0, 70% 0, 70% 100%, 0 100%)', 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)'] }}
                transition={{ duration: 1, times: [0, 0.8, 1] }}
            > 
                <h1 className='about__text__title'>Matéo,<br/> intégrateur web</h1>
                <h2 className='about__text__subtitle' >J'ai toujours été grandement intéressé par<br /> le fonctionnement des choses</h2>
                <p className='about__text__txt1'>et le meilleur moyen de faire ca reste de créer sois-même.</p>
                <p className='about__text__txt2'>Que ca soit jeux vidéo, applications ou site web un peu spécial<br /> j'ai toujours voulu savoir comment tout cela fonctionnais</p>
                <p className='about__text__txt3'>Maintenant je le peux, pour les site web, du moins.</p>
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
                <h2 className='aboutb__text__title'>J'ai suivi a partir de juillet 2023 une formation Open Classrooms</h2>
                <p className='aboutb__text__txt1'>Grâce a cette formation j'ai pu découvrir différentes facettes 
                du metier de developpeur. Je n'ai pas été formé qu'à l'intégration pur et dur j'ai pu, au fil des 
                projets développer mes compétences d'optimisation, de SEO, de debogage mais aussi de gestion de projets</p>
                <p className='aboutb__text__txt2'>Quand à l'intégration j'ai eu l'occasion d'utiliser les bases tel qu'HTML et css 
                tout au long de la formation mais j'ai pu aussi apprendre a manier le javascript ainsi que certaines 
                librairies tels que React.js et Redux.</p>
            </motion.div>
        </article>
    </section>
}

export default Apropos
