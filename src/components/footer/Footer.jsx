import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import gitImage from '../../images/github.png';
import linkedinImage from '../../images/linkedin.png';


const Footer = () => {
  return (
    <div className='hr'>
    <hr />
    <div className='footer'>
      <div className="container">
      <div className="left">
        <h2>EasyService</h2>
        <span>© 2023 Universiteatea Politehnica Bucuresti</span>
      </div>
      <div className="right">
        <div className="social">
          <Link to="https://github.com/RaduNicolae8">
          <img src={gitImage} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/in/radu-nicolae-petrachioiu-0309a5174/">
          <img src={linkedinImage} alt="" />
          </Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer