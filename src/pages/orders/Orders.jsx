import React from 'react'
import './Orders.scss'
import { useContext } from 'react';
import { AuthContext } from '../../App';

function Orders() {

  const context = useContext(AuthContext);

  const authUser = context.authUser;

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
           <th>Image</th> 
           <th>Title</th> 
           <th>Price</th> 
           <th>{authUser?.isSeller ? "Buyer" : "Seller"}</th> 
           <th>Contact</th> 
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Service1</td>
            <td>120</td>
            <td>{authUser?.firstName}</td>
            <td>
              <img className='delete' src="src\images\mail.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Service1</td>
            <td>120</td>
            <td>{authUser?.firstName}</td>
            <td>
              <img className='delete' src="src\images\mail.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Service1</td>
            <td>120</td>
            <td>{authUser?.firstName}</td>
            <td>
              <img className='delete' src="src\images\mail.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Service1</td>
            <td>120</td>
            <td>{authUser?.firstName}</td>
            <td>
              <img className='delete' src="src\images\mail.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Service1</td>
            <td>120</td>
            <td>{authUser?.firstName}</td>
            <td>
              <img className='delete' src="src\images\mail.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Service1</td>
            <td>120</td>
            <td>{authUser?.firstName}</td>
            <td>
              <img className='delete' src="src\images\mail.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders