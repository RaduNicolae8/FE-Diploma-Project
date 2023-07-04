import React, { useEffect, useContext, useRef} from 'react'
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
  const [base64, setBase64] = React.useState(null);
  const node = useRef();


  const {pathname} = useLocation();


  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const handleClick = async () => {
    await timeout(50);
    window.location.reload();
  };
  
  const isActive = () => {
    window.scrollY > 100 ? setActive(true) : setActive(false);
  };

  const handleClickOutside =  e => {
    if (node.current.contains(e.target)) {
        // inside click
        console.log(authUser)
        return;
    }
    // outside click 
    setOpen(false);
};

  useEffect( () => {
    window.addEventListener("scroll", isActive);
    document.addEventListener("mousedown", handleClickOutside );
   

    return () => {
      window.removeEventListener("scroll", isActive);
      document.removeEventListener("mousedown", handleClickOutside );
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
            <div className="user"  ref={node} onClick={()=>setOpen(!open)}>
              {authUser.image === null ? 
              <img src="src\images\profilepic.png" alt=""/>
              : <img src={authUser.img} alt="" />
              }
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
          <Link to="/services/1" className='link' onClick={handleClick}> 
            Tutoring 
          </Link>
          <Link to="/services/2" className='link' onClick={handleClick}> 
            Homework Assistance 
          </Link>
          <Link to="/services/3" className='link' onClick={handleClick}> 
            Circuit Repair 
          </Link>
          <Link to="/services/4" className='link' onClick={handleClick}> 
            Circuit Design 
          </Link>
          <Link to="/services/5" className='link' onClick={handleClick}> 
            Housekeeping 
          </Link>
          <Link to="/services/6" className='link' onClick={handleClick}> 
            Career Assistance 
          </Link>
          <Link to="/services/7" className='link' onClick={handleClick}> 
            General Services 
          </Link>
        </div>
        </>
      )}
    </div>
  )
}

export default Navbar