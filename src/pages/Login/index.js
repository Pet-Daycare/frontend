import React, { useState } from 'react'
import './index.css'
import HeaderDashboard from '../../components/HeaderDashboard'
import pet from '../../assets/pet.svg'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // TODO : POST ke bacekend dan token dan role di set di window
  const handleSubmit = (e) => {
    // TODO: LOGIC
    if(username == "ADMIN"){
      window.localStorage.setItem("token", "323243234");
      window.localStorage.setItem("role", "ADMIN");
      navigate('/dashboard')
    } else if(username == "CUSTOMER"){
      window.localStorage.setItem("token", "323243234");
      window.localStorage.setItem("role", "CUSTOMER");
      navigate('/dashboard')
    }
  }
  
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
                <input type="text" class="form-control login" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" class="form-control login" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input> 
            </div>

            <button class="login_btn" type="submit" onClick={handleSubmit} >Login</button>


            <span className='to_signup'> Not a member? <Link to="/signup" style={{ textDecoration: 'none', color: '#00A6A6' }}>Register</Link></span>

          </div>
      </div>
    </div>
  )
}

export default Login
