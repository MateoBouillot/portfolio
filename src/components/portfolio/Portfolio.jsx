import './portfolio.scss'

function Portfolio() {


    return <>
        <div className='bg'>
            <div className='bg__inner'>
                <div className='bg__inner__book'>
                    <div className='website'>
                        <a href='https://mateobouillot.github.io/projet_Ohmyfood/index.html' className='website__link'>website</a>
                        <p className='website__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora iure ducimus accusantium reprehenderit animi necessitatibus beatae optio autem perferendis, sequi error! Odit autem omnis sint dolorem modi ipsum recusandae!</p>
                    </div>
                    <div className='website none' >
                        <a href='https://op-react-kasa-8r0a0hr1m-mateos-projects-9646288c.vercel.app' className='website__link'></a>
                        <p className='website__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora iure ducimus accusantium reprehenderit animi necessitatibus beatae optio autem perferendis, sequi error! Odit autem omnis sint dolorem modi ipsum recusandae!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Portfolio