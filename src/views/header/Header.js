import React from 'react'
import { Navbar } from './Navbar'
import { Top } from './Top'
import { Title } from './Title'
import { Bottom } from './Bottom'
import { Fab } from './Fab'

export const Header = () => {

  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    if (typeof window !== "undefined") {

      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollPosition])

  return (
    <section className='header-container' id='home'>
      <Navbar />
      <Top />
      <Title />
      <Bottom />
      {scrollPosition > 500 ?
        <Fab />
        : null}
    </section>
  )
}
