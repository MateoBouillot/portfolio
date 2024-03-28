import './portfolio.scss'
import { list, frportfoliotxt, enportfoliotxt } from '../../assets/texts'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { pageLeft, pageRight, pageStop } from '../../redux/bookSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
    const dispatch = useDispatch()


    const [index, setIndex] = useState(0)
    const { turningPage } = useSelector((state) => state.book)
    const { language } = useSelector((state) => state.lang)

    let portfoliotxt = language == 'fr'? frportfoliotxt : enportfoliotxt

    let handleClickLeft = () => {
        if(turningPage === null) {
            if(index == 0) {
                setIndex(list.length-1)
            } else {
                setIndex(index-1)
            }
            dispatch(pageLeft())
            setTimeout(() => {
                dispatch(pageStop())
            }, 2000)
        }
        
    }
    let handleClickRight = () => {
        if(turningPage === null) {
            if(index == list.length-1) {
                setIndex(0)
            }else {
                setIndex(index+1)
            }
            dispatch(pageRight())
            setTimeout(() => {
                dispatch(pageStop())
            }, 2000)
        }
    }

    return <>
        <div className='bg' id='portfolio' >
            <div className='bg__inner'>
                <div className='bg__inner__left' onClick={handleClickLeft}><FontAwesomeIcon icon={faCaretLeft} size='2xl' /></div>
                    <div className='website'>
                        { turningPage == null ? 
                            <><div href='' className='website__left'>
                                <a href={list[index].link} className='card' target='_blank' rel='noreferrer'>
                                    <img className='card__img' src={list[index].img} alt='website screenshot'/>
                                    <p className='card__desc'>{portfoliotxt[index].desc}</p>
                                </a>
                            </div>
                            <div className='website__right'>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Contexte' : 'Context' }</h2>
                                <p className='website__right__txt'>{portfoliotxt[index].contexte}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Compétences utilisé' : 'Skills used' }</h2>
                                <p className='website__right__txt'>{portfoliotxt[index].compétences}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Experience tiré' : 'Experience gained' }</h2>
                                <p className='website__right__txt'>{portfoliotxt[index].experience}</p>
                            </div></> :
                        turningPage == 'left' ? 
                            <><motion.div 
                                animate={{ rotateY: 90 }}
                                transition={{ duration: 0.5 }}
                                style={{ transformOrigin: 'right' }}
                            href='' className='website__left old'>
                                <a href={ index == list.length-1? list[0].link : list[index+1].link } className='card' target='_blank' rel='noreferrer'>
                                    <img className='card__img' src={ index == list.length-1? list[0].img : list[index+1].img } alt='website screenshot'/>
                                    <p className='card__desc'>{index == list.length-1? portfoliotxt[0].desc : portfoliotxt[index+1].desc }</p>
                                </a>
                            </motion.div>
                            <div className='website__right old'>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Contexte' : 'Context' }</h2>
                                <p className='website__right__txt'>{index == list.length-1? portfoliotxt[0].contexte : portfoliotxt[index+1].contexte}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Compétences utilisé' : 'Skills used' }</h2>
                                <p className='website__right__txt'>{index == list.length-1? portfoliotxt[0].compétences : portfoliotxt[index+1].compétences}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Experience tiré' : 'Experience gained' }</h2>
                                <p className='website__right__txt'>{index == list.length-1? portfoliotxt[0].experience : portfoliotxt[index+1].experience}</p>                         
                            </div>
                            <div href='' className='website__left new'>
                                <a href={list[index].link} className='card' target='_blank' rel='noreferrer'>
                                    <img className='card__img' src={list[index].img} alt='website screenshot'/>
                                    <p className='card__desc'>{portfoliotxt[index].desc}</p>
                                </a>
                            </div>
                            <motion.div 
                                animate={{ rotateY: [0, -90, -90, -90, 0], opacity: [0, 0, 0, 1, 1] }}
                                transition={{ duration: 1, times: [0, 0.3, 0.49, 0.5, 1] }}
                                style={{ transformOrigin: 'left', zIndex: 5 }}
                            className='website__right new'>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Contexte' : 'Context' }</h2>
                                <p className='website__right__txt'>{portfoliotxt[index].contexte}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Compétences utilisé' : 'Skills used' }</h2>
                                <p className='website__right__txt'>{portfoliotxt[index].compétences}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Experience tiré' : 'Experience gained' }</h2>
                                <p className='website__right__txt'>{portfoliotxt[index].experience}</p>                            
                            </motion.div></>:
                        turningPage == 'right' ? 
                        <><div href='' className='website__left old'>
                            <a href={ index == 0? list[list.length-1].link : list[index-1].link } className='card' target='_blank' rel='noreferrer'>
                                <img className='card__img' src={ index == 0? list[list.length-1].img : list[index-1].img } alt='website screenshot'/>
                                <p className='card__desc'>{index == 0? portfoliotxt[list.length-1].desc : portfoliotxt[index-1].desc }</p>
                            </a>
                        </div>
                        <motion.div 
                            animate={{ rotateY: -90 }}
                            transition={{ duration: 0.5 }}
                            style={{ transformOrigin: 'left' }}
                        className='website__right old'>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Contexte' : 'Context' }</h2>
                                <p className='website__right__txt'>{index == 0? portfoliotxt[list.length-1].contexte : portfoliotxt[index-1].contexte}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Compétences utilisé' : 'Skills used' }</h2>
                                <p className='website__right__txt'>{index == 0? portfoliotxt[list.length-1].compétences : portfoliotxt[index-1].compétences}</p>
                                <h2 className='website__right__title'>{ language == 'fr'? 'Experience tiré' : 'Experience gained' }</h2>
                                <p className='website__right__txt'>{index == 0? portfoliotxt[list.length-1].experience : portfoliotxt[index-1].experience}</p>                       
                        </motion.div>
                        <motion.div 
                            animate={{ rotateY: [0, 90, 90, 90, 0], opacity: [0, 0, 0, 1, 1] }}
                            transition={{ duration: 1, times: [0, 0.3, 0.49, 0.5, 1] }}
                            style={{ transformOrigin: 'right', zIndex: 5 }}
                        href='' className='website__left new'>
                            <a href={list[index].link} className='card' target='_blank' rel='noreferrer'>
                                <img className='card__img' src={list[index].img} alt='website screenshot'/>
                                <p className='card__desc'>{portfoliotxt[index].desc}</p>
                            </a>
                        </motion.div>
                        <div className='website__right new'>
                            <h2 className='website__right__title'>{ language == 'fr'? 'Contexte' : 'Context' }</h2>
                            <p className='website__right__txt'>{portfoliotxt[index].contexte}</p>
                            <h2 className='website__right__title'>{ language == 'fr'? 'Compétences utilisé' : 'Skills used' }</h2>
                            <p className='website__right__txt'>{portfoliotxt[index].compétences}</p>
                            <h2 className='website__right__title'>{ language == 'fr'? 'Experience tiré' : 'Experience gained' }</h2>
                            <p className='website__right__txt'>{portfoliotxt[index].experience}</p>             
                        </div></>
                        : <p>cassé</p>
                        }
                    </div>
                <div className='bg__inner__right' onClick={handleClickRight}><FontAwesomeIcon icon={faCaretRight} size='2xl' /></div>
            </div>
        </div>
    </>
}

export default Portfolio