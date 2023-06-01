import React, { useEffect, useContext} from 'react'
import './Navbar.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import axios from 'axios';
import { useUser } from '../../contexts/AuthContext';
import { AuthContext } from '../../App';


function Navbar() {

  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 100 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  //auth

  const context = useContext(AuthContext);

  const authUser = context.authUser;

  // const {authUser, setAuthUser} = useUser();
  

  // useEffect( async ()=>{
  //   const res = await newRequest.get('/api/auth').then(res => res.json())
  //   .then(res => {
  //     setAuthUser(res);
  //     setIsLoggedIn(true);
  //   })
  // },[])


  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      await newRequest.get('/logout');
      //localStorage.setItem("currentUser", null);
      
      navigate('/');
    }catch(err){
      if(err.message = "Network Error")
      {
        //localStorage.setItem("currentUser", null);
        context.setAuthUser(null);
        context.setIsLoggedIn(false);
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
          {/* <span>Business</span> */}
          {/* <span>Explore</span> */}
          {!authUser && <Link to="login" className='link' preventScrollReset={false}>Sign in</Link>}
          {/* {!authUser && <span>Start Selling</span>} */}
          {!authUser && <Link to="register" className='link' preventScrollReset={false}> <button className={active || pathname!=="/" ? "button active" : "button"}>Register</button> </Link>}
          {authUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <span>{authUser?.firstName}</span>
              {open && <div className="options">
                {
                  authUser && (
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
          <Link to="/services?id=1" className='link'> 
            Tutoring 
          </Link>
          <Link to="/services?id=2" className='link'> 
            Homework Assistance 
          </Link>
          <Link to="/services?id=3" className='link'> 
            Circuit Repair 
          </Link>
          <Link to="/services?id=4" className='link'> 
            Circuit Design 
          </Link>
          <Link to="/services?id=5" className='link'> 
            Housekeeping 
          </Link>
          <Link to="/services?id=6" className='link'> 
            Career Assistance 
          </Link>
          <Link to="/services?id=7" className='link'> 
            General Services 
          </Link>
        </div>
        </>
      )}
    </div>
  )
}

export default Navbar