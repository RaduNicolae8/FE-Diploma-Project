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

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of co-production at your fingertips</h1>
            <div className="title">
              <img src="src\images\check2.png" alt="" />
              Intuitive design and easeness of use
              
            </div>
            <p>
              Find high-quality services at every price point in a matter of clicks.
            </p>
            <div className="title">
              <img src="src\images\check2.png" alt="" />
              Reach your potential
            </div>
            <p>
              Offer other users part of your expertise and start earning money today.
            </p>
            <div className="title">
              <img src="src\images\check2.png" alt="" />
              Adaptable to your needs
            </div>
            <p>
              Did not find the service you were looking for? Go ahead and create a service request for it.
            </p>
            <div className="title">
              <img src="src\images\check2.png" alt="" />
              Centralized experience
            </div>
            <p>
              Eliminate the need for hours of research and browsing through multiple websites.
            </p>
          </div>
          <div className="item">
            <img src="src\images\happy.jpg" alt="happy :)" className='happy'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home