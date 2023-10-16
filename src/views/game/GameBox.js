import React from 'react'
import googlePlay from '../../assets/game/google-play-btn.png'
import appStore from '../../assets/game/app-store-btn.png'
import mobile from '../../assets/game/Frame 1.png'
import mobile2 from '../../assets/game/Frame 2.png'
import mobile3 from '../../assets/game/Frame 3.png'
import Fade from 'react-reveal/Fade';

export const GameBox = () => {
    return (
        <section className='game-explore-container'>
            <div className='game-details-wrapper' id='jump'>
                <Fade left big duration={2000} distance="30%" delay={200}>
                    <div className='card-wrapper'>
                        <div className='game-details'>
                            <div className='game-logo'>
                                <div className='jump-on-image'></div>
                                <div className='title'>
                                    <h1>Jump On</h1>
                                    <p>Adventure</p>
                                </div>
                            </div>
                            <p className='para'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <div className='download-btn'>
                                <img src={appStore} alt='app Store' />
                                <img src={googlePlay} alt='google Play' />
                            </div>
                        </div>
                        <img src={mobile} alt='mobile' />
                    </div>
                </Fade>
            </div>
            <div className='game-details-wrapper' id='cat'>
                <Fade left big duration={2000} distance="30%" delay={200}>
                    <div className='card-wrapper'>
                        <div className='game-details'>
                            <div className='game-logo'>
                                <div className='feed-cat-image'></div>
                                <div className='title'>
                                    <h1>Feed the Cat</h1>
                                    <p>Casual</p>
                                </div>
                            </div>
                            <p className='para'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <div className='download-btn'>
                                <img src={appStore} alt='app Store' />
                                <img src={googlePlay} alt='google Play' />
                            </div>
                        </div>
                        <img src={mobile3} alt='mobile' />
                    </div>
                </Fade>
            </div>
            <div className='game-details-wrapper' id='ripple'>
                <Fade left big duration={2000} distance="30%" delay={200}>
                    <div className='card-wrapper'>
                        <div className='game-details'>
                            <div className='game-logo'>
                                <div className='ripple-image'></div>
                                <div className='title'>
                                    <h1>Ripple Delete</h1>
                                    <p>Strategy</p>
                                </div>
                            </div>
                            <p className='para'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <div className='download-btn'>
                                <img src={appStore} alt='app Store' />
                                <img src={googlePlay} alt='google Play' />
                            </div>
                        </div>
                        <img src={mobile2} alt='mobile' />
                    </div>
                </Fade>
            </div>
        </section>
    )
}
