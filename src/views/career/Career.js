import React from 'react'
import working from '../../assets/background/working.png'
import Fade from 'react-reveal/Fade';

export const Career = () => {
  return (
    <section className='career-container' id='career'>
      <Fade duration={2000} delay={200}>
        <div>
          <h4>Come Work at Zozzo!</h4>
          <h1>Great People Make <span>Great Games.</span><br />Explore our Available Opportunities</h1>
          <button>See Openings</button>
        </div>
      </Fade>
      <Fade left duration={2000} distance="30%" delay={200}>
        <img src={working} alt='working' />
      </Fade>
    </section>
  )
}
