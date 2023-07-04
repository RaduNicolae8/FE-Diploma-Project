import React from 'react'
import './ServiceCard.scss'
import { Link } from 'react-router-dom'
import starImage from '../../images/star.png';
import heartImage from '../../images/heart.png';
import redHeartImage from '../../images/redHeart.png';
import { useContext } from 'react';
import { AuthContext } from '../../App';
import newRequest from '../../utils/newRequest';
import { useState } from 'react';





function ServiceCard({item}) {

function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

const context = useContext(AuthContext);
const authUser = context.authUser;
const [heartImg, setHeartImg] = useState(heartImage);

const handleClick =  async (id) => {
    var heartRequest = {userId:authUser.id, serviceId:id};
    console.log(heartRequest);
    if(heartImg === heartImage)
     newRequest.post('/api/starred-service/save',{...heartRequest}).then(async (res) => {
        //console.log(res);
        
        setHeartImg(redHeartImage);
    })
    else {
        await newRequest.delete('/api/starred-service/delete',{params:{userId:authUser.id,serviceId:id}})
        setHeartImg(heartImage);
    }
}

  return (
    <div className='serviceCard'>
        <Link to ={ "/service/"+ item.id }>
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
        </Link>
        <hr />
        <div className="details">
            <img src={heartImg} alt="" onClick={()=>handleClick(item.id)}/>
            <div className="price">

            <span>Starting at</span>
            <h2>{item.price} RON</h2>
            </div>
        </div>
    </div>
    
  )
}

export default ServiceCard