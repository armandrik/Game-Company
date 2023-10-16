import React from 'react'
import ghost from '../../assets/background/ghost.png'
import Fade from 'react-reveal/Fade';

export const Explore = () => {
  return (
    <section className='explore-container'>
      <Fade duration={2000} delay={200}>
        <img src={ghost} alt='ghost' />
        <h1><span>Explore</span> Our Games</h1>
      </Fade>
      <Fade bottom duration={2000} distance="30%" delay={200}>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </Fade>
    </section>
  )
}
