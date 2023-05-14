import React, { useEffect } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

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

  const currentUser ={
    id:1,
    username: "Radu Nicolae",
    isSeller: true
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
          <span>EasyService Business</span>
          <span>Explore</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Start Selling</span>}
          {!currentUser && <button>Register</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                    <Link to="/myServices" className='link'>Services</Link>
                    <Link to="/add" className='link'>Add new service</Link>
                    </>
                  )
                }
                <Link to="/orders" className='link'>Orders</Link>
                <Link to="/messages" className='link'>Messages</Link>
                <Link to="/logout" className='link'>Log out</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      { active || pathname!=="/" && (
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