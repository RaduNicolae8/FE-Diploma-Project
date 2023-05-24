import React, { useEffect } from 'react'
import './Navbar.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import axios from 'axios';


function Navbar() {

  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      await newRequest.get('/logout');
      localStorage.setItem("currentUser", null);
      
      navigate('/');
    }catch(err){
      if(err.message = "Network Error")
      {
        localStorage.setItem("currentUser", null);
        navigate('/');
      }
      else{
        console.log(err);
      }
    }
  }

  return (
    <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
          <span>EasyService</span>
          </Link>  
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          {!currentUser && <Link to="login" className='link' preventScrollReset={false}>Sign in</Link>}
          {!currentUser && <span>Start Selling</span>}
          {!currentUser && <button className={active || pathname!=="/" ? "button active" : "button"}>Register</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <span>{currentUser?.firstName}</span>
              {open && <div className="options">
                {
                  currentUser && (
                    <>
                    <Link to="/myServices" className='link'>Services</Link>
                    <Link to="/add" className='link' preventScrollReset={false}>Add new service</Link>
                    </>
                  )
                }
                <Link to="/orders" className='link'>Orders</Link>
                <Link to="/messages" className='link'>Messages</Link>
                <Link className='link' onClick={handleLogout}>Log out</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      { (active || pathname!=="/") && (
        <>
        <hr />
        <div className="menu">
          <Link to="/" className='link'> 
            Tutoring 
          </Link>
          <Link to="/" className='link'> 
            Homework Assistance 
          </Link>
          <Link to="/" className='link'> 
            Circuit Repair 
          </Link>
          <Link to="/" className='link'> 
            Circuit Design 
          </Link>
          <Link to="/" className='link'> 
            Housekeeping 
          </Link>
          <Link to="/" className='link'> 
            Career Assistance 
          </Link>
          <Link to="/" className='link'> 
            General Services 
          </Link>
        </div>
        </>
      )}
    </div>
  )
}

export default Navbar