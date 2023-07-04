import React from 'react'
import './Orders.scss'
import { useContext } from 'react';
import { AuthContext } from '../../App';
import newRequest from '../../utils/newRequest';
import { useQuery } from 'react-query';
import { useState } from 'react';

function Orders() {

  const context = useContext(AuthContext);
  const authUser = context.authUser;

  const [services, setServices] = useState([{}]);


  const { isLoading, error, data } = useQuery({
    queryKey: ["heartedServices"],
    queryFn: () =>{
  
      newRequest.get('/api/starred-service',{params : {userId:authUser.id}}).then((res) => {
          setServices(res.data);
          // console.log(res.data);
          //console.log(res);
          //console.log(services);
      
      })
  
    },
  });

  const deleteService = async (id) => {
    await newRequest.delete('/api/starred-service/delete',{params:{userId:authUser.id,serviceId:id}})
    window.location.reload();
  }

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Favorites</h1>
        </div>
        <table>
          <tr>
           <th>Image</th> 
           <th>Title</th> 
           <th>Price</th> 
           <th>Seller</th> 
           <th>Action</th> 
          </tr>
          {
            services.map((service) => (
              <tr>
              <td>
                <img className='img' src={service?.marketplaceService?.coverImage} alt="" />
              </td>
              <td>{service?.marketplaceService?.title}</td>
              <td>{service?.marketplaceService?.price}</td>
              <td>{service?.marketplaceUser?.firstName} {service?.marketplaceUser?.lastName}</td>
              <td>
                <img className='delete' src="src\images\x.png" alt="" onClick={()=>deleteService(service?.marketplaceService?.id)} />
              </td>
            </tr>
              ))
          }
        </table>
      </div>
    </div>
  )
}

export default Orders