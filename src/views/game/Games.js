import React from 'react'
import { Explore } from './Explore'
import { GameBox } from './GameBox'

export const Games = () => {
  return (
    <section className='game-container' id='games'>
        <Explore/>
        <GameBox/>
    </section>
  )
}
