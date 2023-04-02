import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-w-name.svg'

function HeaderLanding() {
  return (
    <div className='header-land'>
      <img src={Logo}></img>
      <div className='row justify-content-start button'>
        <div class='col-6'>
        <Link to='/login'><button class="to_login_btn">Login</button></Link>
        </div>
        <div class='col-6'>
        <Link to='/signup'><button class="to_signup_btn">Sign up</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderLanding
