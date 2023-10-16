import React from 'react'
import zozoIcon from '../../assets/background/company-icon.png'
import { BurgerMenu } from './BurgerMenu'

export const Navbar = () => {
  return (
    <section className='navbar'>
        <div className='zozo-game-icon'>
            <img src={zozoIcon} alt='zozo Icon'/>
            <h1>Zoozzo Games</h1>
        </div>
        <div className='menu-wrapper'>
            <a href='#home'>Home</a>
            <a href='#games'>Games</a>
            <a href='#career'>Careers</a>
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
        </div>
        <BurgerMenu/>
    </section>
  )
}