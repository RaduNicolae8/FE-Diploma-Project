import React from 'react'
import './ServiceCard.scss'
import { Link } from 'react-router-dom'
import starImage from '../../images/star.png';
import heartImage from '../../images/heart.png';


function ServiceCard({item}) {
  return (
    <Link to ={ "/service/"+ item.id }>
        {/* should be /item.id */}
    <div className='serviceCard'>
        <img src={item.coverImage} alt="" />
        <div className="info">
            <div className="user">
                <div className="spans">
                <h1>{item.title}</h1>
                <span>{item.user.firstName} {item.user.lastName}</span>
                </div>
                {item.isRequest === true ? <span className='isRequest'>[Requested]</span> : null}
            </div>
            <p>{item.shortDescription}</p>
            <div className="star">
                <img src={starImage} alt="" />
                <span>
                    {/* {item.star} */}
                    5
                    </span>
            </div>
        </div>
        <hr />
        <div className="details">
            <img src={heartImage} alt="" />
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