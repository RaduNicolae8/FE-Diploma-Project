import React from 'react'
import './ServiceCard.scss'
import { Link } from 'react-router-dom'

function ServiceCard({item}) {
  return (
    <Link to = "/service?id=1">
    <div className='serviceCard'>
        <img src={item.img} alt="" />
        <div className="info">
            <div className="user">
                <span>{item.username}</span>
                {item.isRequest === true ? <span className='isRequest'>[Requested]</span> : null}
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src="src\images\star.png" alt="" />
                <span>{item.star}</span>
            </div>
        </div>
        <hr />
        <div className="details">
            <img src="src\images\heart.png" alt="" />
            <div className="price">

            <span>Starting at</span>
            <h2>{item.price} RON</h2>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ServiceCard