import React from 'react'
import Fade from 'react-reveal/Fade';

export const Bottom = () => {

    const navigateCat = ()=>{
        const element = document.getElementById("cat")
        element.scrollIntoView({behavior : 'smooth'})
    }

    const navigateRipple = ()=>{
        const element = document.getElementById("ripple")
        element.scrollIntoView({behavior : 'smooth'})
    }

    return (
        <section className='bottom'>
            <Fade left big duration={2000} distance="30%">
                <div className='feed-the-cat' onClick={navigateCat}>
                    <div className='feed-cat-image'></div>
                    <div className='title'>
                        <h1>Feed the Cat</h1>
                        <p>Casual</p>
                    </div>
                </div>
            </Fade>
            <Fade left big duration={2000} distance="30%">
                <div className='ripple-delete' onClick={navigateRipple}>
                    <div className='ripple-delete-image'></div>
                    <div className='title'>
                        <h1>Ripple Delete</h1>
                        <p>Adventure</p>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
