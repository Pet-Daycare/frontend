import React from 'react'
import './index.css'
import HeaderDashboard from '../../components/HeaderDashboard'
import pet from '../../assets/pet.svg'
import { Link } from 'react-router-dom'

function Login() {
 
  return (
    <div class='login-page'>
      <HeaderDashboard/>
      <div class="row">
        <div class="col">
            <img class='pet-img' src={pet} alt="pet" width="80%"/>
        </div>
        
        <div class="col position-custom">
            <div class='greeting'>
                <span class='hello'>Hello!</span>
                <span class='welcome'>Welcome back!</span>
            </div>

            <div class='field'>
                <input type="text" class="form-control login" id="username" placeholder="Username"></input>
                <input type="password" class="form-control login" id="password" placeholder="Password"></input> 
            </div>

            <button class="login_btn" type="submit">Login</button>


            <span className='to_signup'> Not a member? <Link to="/signup" style={{ textDecoration: 'none', color: '#00A6A6' }}>Register</Link></span>

          </div>
      </div>
    </div>
  )
}

export default Login
