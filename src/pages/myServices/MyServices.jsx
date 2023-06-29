import React from 'react'
import './MyServices.scss'
import { Link } from 'react-router-dom'

function MyServices() {
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
     <th>Orders</th> 
     <th>Action</th> 
    </tr>
    <tr>
      <td>
        <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </td>
      <td>Service1</td>
      <td>120</td>
      <td>8</td>
      <td>
        <img className='delete' src="src\images\delete.png" alt="" />
      </td>
    </tr>
    <tr>
      <td>
        <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </td>
      <td>Service1</td>
      <td>120</td>
      <td>8</td>
      <td>
        <img className='delete' src="src\images\delete.png" alt="" />
      </td>
    </tr>
    <tr>
      <td>
        <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </td>
      <td>Service1</td>
      <td>120</td>
      <td>8</td>
      <td>
        <img className='delete' src="src\images\delete.png" alt="" />
      </td>
    </tr>
    <tr>
      <td>
        <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </td>
      <td>Service1</td>
      <td>120</td>
      <td>8</td>
      <td>
        <img className='delete' src="src\images\delete.png" alt="" />
      </td>
    </tr>
    <tr>
      <td>
        <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </td>
      <td>Service1</td>
      <td>120</td>
      <td>8</td>
      <td>
        <img className='delete' src="src\images\delete.png" alt="" />
      </td>
    </tr>
    <tr>
      <td>
        <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </td>
      <td>Service1</td>
      <td>120</td>
      <td>8</td>
      <td>
        <img className='delete' src="src\images\delete.png" alt="" />
      </td>
    </tr>
  </table>
</div>
</div>
  )
}

export default MyServices