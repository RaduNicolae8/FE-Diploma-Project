import React from 'react'
import './Messages.scss'
import { Link } from 'react-router-dom'

function Messages() {
  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo odio, unde atque officiis rem adipisci, enim quidem voluptate quis sed tempore magnam molestiae cupiditate aut quo. Perspiciatis, dolorem quae!';
  const extra = false;
  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>

        </div>
        <table>
          <tr>
           <th>Name</th> 
           <th>Last Message</th> 
           <th>Date</th> 
           {extra===true? <th>Action</th> : null}
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to="/message?id=1">
              {message.substring(0,100)}...
              </Link>
            </td>
            <td>20.05.2023</td>
            {extra===true? 
            <td>
              <button>Mark as Read</button>
            </td> : null}
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to="/message?id=2">
              {message.substring(0,100)}...
              </Link>
            </td>            
            <td>20.05.2023</td>
            {extra===true? 
            <td>
              <button>Mark as Read</button>
            </td> : null}
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to="/message?id=3">
              {message.substring(0,100)}...
              </Link>
            </td>            
            <td>20.05.2023</td>
            {extra===true? 
            <td>
              <button>Mark as Read</button>
            </td> : null}
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to="/message?id=4">
              {message.substring(0,100)}...
              </Link>
            </td>            
            <td>20.05.2023</td>
            {extra===true? 
            <td>
              <button>Mark as Read</button>
            </td> : null}
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to="/message?id=5">
              {message.substring(0,100)}...
              </Link>
            </td>            
            <td>20.05.2023</td>
            {extra===true? 
            <td>
              <button>Mark as Read</button>
            </td> : null}
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to="/message?id=6">
              {message.substring(0,100)}...
              </Link>
            </td>           
            <td>20.05.2023</td>
            {extra===true? 
            <td>
              <button>Mark as Read</button>
            </td> : null}
          </tr>
        </table>
      </div>
    </div>

  )
}

export default Messages