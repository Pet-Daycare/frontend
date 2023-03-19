import React from 'react'
import './index.css'
import HeaderDashboard from '../../components/HeaderDashboard'
import pet from '../../assets/pet.svg'

function Login() {
 
  return (
    <div class='login-page'>
      <HeaderDashboard/>
      <div class="row">
        <div class="col">
            <img class='pet-img' src={pet} width="80%"/>
        </div>
        
        <div class="col position-custom">
            <div class='greeting'>
                <h1 class='hello'>Hello!</h1>
                <h4 class='welcome'>Welcome back!</h4>
            </div>

            <div class='field'>
                <input type="text" class="form-control" id="username" placeholder="Username"></input>
                <input type="password" class="form-control" id="password" placeholder="Password"></input>
            </div>

            <button class="login_btn" type="submit">Login</button>

          </div>
      </div>
    </div>
  )
}

export default Login
