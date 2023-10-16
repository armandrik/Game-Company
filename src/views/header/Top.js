import React from 'react'
import primaryTop from '../../assets/background/primary-top.png'
import secondaryTop from '../../assets/background/secondary-top.png'
import Fade from 'react-reveal/Fade';

export const Top = () => {

    const navigate = ()=>{
        const element = document.getElementById("jump")
        element.scrollIntoView({behavior : 'smooth'})
    }

    return (
        <section className='top'>
            <Fade bottom duration={2000} distance="30%" delay={200}>
                <img src={primaryTop} alt='primary Top' className='primary-img' />
            </Fade>
            <Fade left big duration={2000} distance="30%" delay={200}>
                <div className='jump-on-container' onClick={navigate}>
                    <div className='jump-on-image'></div>
                    <div className='title'>
                        <h1>Jump On</h1>
                        <p>Strategy</p>
                    </div>
                </div>
            </Fade>
            <Fade top duration={2000} distance="30%" delay={200}>
                <img src={secondaryTop} alt='secondary Top' className='secondary-img' />
            </Fade>
        </section>
    )
}
