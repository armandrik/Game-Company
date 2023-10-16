import React from 'react'
import zozoIcon from '../../assets/background/company-icon.png'
import googlePlay from '../../assets/game/google-play-btn.png'
import appStore from '../../assets/game/app-store-btn.png'
import { Content } from './Content'

export const Footer = () => {
    return (
        <section className='footer-container'>
            <div className='zozo-game-icon'>
                <img src={zozoIcon} alt='zozo Icon' />
                <h1>Zoozzo Games</h1>
            </div>
            <h1 className='h1'>Creating the Very Best in Mobile Gaming</h1>
            <Content/>
            <div className='download-btn'>
                <img src={appStore} alt='app Store' />
                <img src={googlePlay} alt='google Play' />
            </div>
            <span>Developed by <b>Drik</b></span>
        </section>
    )
}
