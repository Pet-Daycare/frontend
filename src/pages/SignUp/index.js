import React from 'react'
import './index.css'
import HeaderDashboard from '../../components/HeaderDashboard'
import pet from '../../assets/pet.svg'
import { Link } from 'react-router-dom'

function SignUp() {
 
  return (
    <div class='signup-page'>
      <HeaderDashboard/>
      <div class="row">
        <div class="col">
            <img class='pet-img' src={pet} alt="pet" width="80%"/>
        </div>
        
        <div class="col position-custom">
            <div class='greeting'>
                <span class='hello'>Hello!</span>
                <span class='lets'>Let's get started!</span>
            </div>

            <table class='field'>
                <tr>
                    <td colSpan='2'>
                        <input type="text" class="form-control signup" id="fullname" placeholder="Fullname"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" class="form-control signup" id="username" placeholder="Username"></input>
                    </td>
                    <td>
                        <input type="email" class="form-control signup" id="email" placeholder="Email"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" class="form-control signup" id="password1" placeholder="Password"></input>
                    </td>
                    <td>
                        <input type="password" class="form-control signup" id="password2" placeholder="Confirm password"></input>
                    </td>
                </tr>
            </table>

            <button class="signup_btn" type="submit">Sign Up</button>

            <span className='to_login'> Already a member? <Link to="/login" style={{ textDecoration: 'none', color: '#00A6A6'}}>Login</Link></span>

          </div>
      </div>
    </div>
  )
}

export default SignUp
