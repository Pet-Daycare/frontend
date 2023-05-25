import React from "react";
import axios from "axios";
import './index.css';
import Logo from '../../assets/logo-w-name.svg'

import { useNavigate } from "react-router-dom";

function HeaderLogout() {
      
  const navigate = useNavigate();

  async function handleLogout(e) {
    let token = window.localStorage.getItem("token");
    console.log(token);
    let header = "Bearer " + token
    console.log(header)

    let link = "http://localhost:8080/api/v1/auth/logout/" + token;
    console.log(link);
    try {
      let res = await axios.post(link,  {
        headers: {
        "Authorization": "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
        "Access-Control-Allow-Credentials": "true",
	    "Access-Control-Max-Age": "1800",
		"Access-Control-Allow-Headers": "content-type"
      }});

      console.log(res)

      window.localStorage.clear();

      console.log(window.localStorage.getItem("token"));

      alert("Logout Successful");

      navigate("/");
    } catch (e) {
      alert("Something Happened");
    }
  }

  return (
    <div className='header-logout'>
      <img src={Logo}></img>
      <button class="logout_btn" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HeaderLogout
