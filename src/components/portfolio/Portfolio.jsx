import './portfolio.scss'
import { list } from '../../assets/texts'
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
                <div className='left' onClick={handleClickLeft}><FontAwesomeIcon icon={faCaretLeft} size='2xl' /></div>
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
                <div className='right' onClick={handleClickRight}><FontAwesomeIcon icon={faCaretRight} size='2xl' /></div>
            </div>
        </div>
    </>
}

export default Portfolio