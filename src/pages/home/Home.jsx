import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import {cards} from '../../data'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map(card => (
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <br />
        <br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default Home