import React from 'react'
import Fade from 'react-reveal/Fade';

export const Title = () => {
  return (
    <section className='title-container'>
      <Fade duration={2000}>
        <h1>By Gamers, <span>For Gamers</span></h1>
        <p>Creating the Very Best in Mobile Gaming</p>
      </Fade>
    </section>
  )
}
