import React from 'react'
import './MyServices.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../App'
import newRequest from '../../utils/newRequest'
import { useQuery } from 'react-query'
import { useState } from 'react'

function MyServices() {

  const context = useContext(AuthContext);

  const authUser = context.authUser;
  const [services, setServices] = useState([{}]);
  const [search, setSearch] = useState([{}]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["servicesbyid"],
    queryFn: () =>{
  
      newRequest.get('/api/service/get/user',{params : {userId:authUser.id}}).then((res) => {
          
          setServices(res.data);
          //console.log(res);
          //console.log(services);
      
      })
  
    },
  });
  //console.log(services);

  const deleteService = async (id) => {
    await newRequest.delete('/api/images/delete',{params:{id:id}})
    await newRequest.delete('/api/service/'+id)
    window.location.reload();
  }

  return (
<div className='myServices'>
<div className="container">
  <div className="title">
    <h1>My Services</h1>
    <Link to="/add">
      <button>Add Service</button>
    </Link>
  </div>
  <table>
    <tr>
     <th>Image</th> 
     <th>Title</th> 
     <th>Price</th> 
     <th>Action</th> 
    </tr>
    {
      services.map((service) => (
        <tr>
        <td>
          <img className='img' src={service.coverImage} alt="" />
        </td>
        <td>{service.title}</td>
        <td>{service.price}</td>
        <td>
          <img className='delete' src="src\images\delete.png" alt="" onClick={()=>deleteService(service.id)}/>
        </td>
      </tr>
      ))
    }
  </table>
</div>
</div>
  )
}

export default MyServices