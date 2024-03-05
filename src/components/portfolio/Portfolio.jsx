import './portfolio.scss'
import kasa from '../../assets/Kasa.png'
import OMF from '../../assets/OMF.png'
import booki from '../../assets/Booki.png'
import carducci from '../../assets/carducci.png'
import event from '../../assets/77event.png'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { pageLeft, pageRight, pageStop } from '../../redux/bookSlice'

function Portfolio() {
    const dispatch = useDispatch()
    const list = [
        { link: 'https://mateobouillot.github.io/Ohmyfood-open-classrooms/', img: OMF },
        { link: 'https://op-react-kasa-8r0a0hr1m-mateos-projects-9646288c.vercel.app', img: kasa },
        { link: 'https://mateobouillot.github.io/booki-open-classrooms/', img: booki },
        { link: 'https://mateobouillot.github.io/nina-carducci-open-classrooms/', img: carducci },
        { link: 'https://op-projet-10.vercel.app', img: event }
    ]

    const [index, setIndex] = useState(0)
    const { turningPage } = useSelector((state) => state.book)

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
        <div className='bg'>
            <div className='bg__inner'>
                <p className='left' onClick={handleClickLeft}>A</p>
                    <div className='website'>
                        { turningPage == null ? 
                            <><div href='' className='website__left'>
                                <a href={list[index].link} className='card' target='_blank' rel='noreferrer'>
                                    <img className='card__img' src={list[index].img} alt='website screenshot'/>
                                </a>
                            </div>
                            <div className='website__right'>
                                <p className='website__right__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora iure ducimus accusantium reprehenderit animi necessitatibus beatae optio autem perferendis, sequi error! Odit autem omnis sint dolorem modi ipsum recusandae!</p>                        
                            </div></> :
                        turningPage == 'left' ? 
                            <><motion.div 
                                animate={{ rotateY: 90 }}
                                transition={{ duration: 1 }}
                                style={{ transformOrigin: 'right' }}
                            href='' className='website__left old'>
                                <a href={ index == list.length-1? list[0].link : list[index+1].link } className='card' target='_blank' rel='noreferrer'>
                                    <img className='card__img' src={ index == list.length-1? list[0].img : list[index+1].img } alt='website screenshot'/>
                                </a>
                            </motion.div>
                            <div className='website__right old'>
                                <p className='website__right__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora iure ducimus accusantium reprehenderit animi necessitatibus beatae optio autem perferendis, sequi error! Odit autem omnis sint dolorem modi ipsum recusandae!</p>                        
                            </div>
                            <div href='' className='website__left new'>
                                <a href={list[index].link} className='card' target='_blank' rel='noreferrer'>
                                    <img className='card__img' src={list[index].img} alt='website screenshot'/>
                                </a>
                            </div>
                            <motion.div 
                                animate={{ rotateY: [0, -90, -90, -90, 0], opacity: [0, 0, 0, 1, 1] }}
                                transition={{ duration: 2, times: [0, 0.3, 0.49, 0.5, 1] }}
                                style={{ transformOrigin: 'left', zIndex: 5 }}
                            className='website__right new'>
                                <p className='website__right__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora iure ducimus accusantium reprehenderit animi necessitatibus beatae optio autem perferendis, sequi error! Odit autem omnis sint dolorem modi ipsum recusandae!</p>                        
                            </motion.div></>:
                        turningPage == 'right' ? 
                        <><div href='' className='website__left old'>
                            <a href={ index == 0? list[list.length-1].link : list[index-1].link } className='card' target='_blank' rel='noreferrer'>
                                <img className='card__img' src={ index == 0? list[list.length-1].img : list[index-1].img } alt='website screenshot'/>
                            </a>
                        </div>
                        <motion.div 
                            animate={{ rotateY: -90 }}
                            transition={{ duration: 1 }}
                            style={{ transformOrigin: 'left' }}
                        className='website__right old'>
                            <p className='website__right__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora iure ducimus accusantium reprehenderit animi necessitatibus beatae optio autem perferendis, sequi error! Odit autem omnis sint dolorem modi ipsum recusandae!</p>                        
                        </motion.div>
                        <motion.div 
                            animate={{ rotateY: [0, 90, 90, 90, 0], opacity: [0, 0, 0, 1, 1] }}
                            transition={{ duration: 2, times: [0, 0.3, 0.49, 0.5, 1] }}
                            style={{ transformOrigin: 'right', zIndex: 5 }}
                        href='' className='website__left new'>
                            <a href={list[index].link} className='card' target='_blank' rel='noreferrer'>
                                <img className='card__img' src={list[index].img} alt='website screenshot'/>
                            </a>
                        </motion.div>
                        <div className='website__right new'>
                            <p className='website__right__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora iure ducimus accusantium reprehenderit animi necessitatibus beatae optio autem perferendis, sequi error! Odit autem omnis sint dolorem modi ipsum recusandae!</p>                        
                        </div></>
                        : <p>cassé</p>
                        }
                    </div>
                <p className='right' onClick={handleClickRight}>A</p>
            </div>
        </div>
    </>
}

export default Portfolio