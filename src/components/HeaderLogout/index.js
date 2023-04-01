import React from 'react';
import './index.css';
import Logo from '../../assets/logo-w-name.svg'

function HeaderLogout() {
  return (
    <div className='header-logout'>
      <img src={Logo}></img>
      <button class="logout_btn">Logout</button>
    </div>
  )
}

export default HeaderLogout
