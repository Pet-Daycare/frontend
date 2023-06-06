import React, { useState } from "react";
import "./index.css";
import HeaderDashboard from "../../components/HeaderDashboard";
import pet from "../../assets/pet.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  async function register(event) {
    event.preventDefault();

    let arrString = fullname.split(" ");

    if (arrString.length < 2) {
      alert("Nama minimal mempunyai 2 kata!");
    } else if (password1 != password2) {
      alert("Password anda tidak sama!");
    } else {
      console.log(password1);
      console.log(email);
      console.log(username);
      try {
        // let url = "http://104.198.131.227/api/v1/auth/register";
        let url = "http://localhost:8080/api/v1/auth/register";

        // let url = "https://34.172.96.175/api/v1/auth/register/verify-token/" + "isajdias21313";

        let request = await axios.post(url, {
          password: password1,
          email: email,
          fullName: fullname,
          username: username,
          role: "USER",
        });
        console.log(request);
        alert("Register Successfully");
        navigate("/login");
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <div class="signup-page">
      <HeaderDashboard />
      <div class="row">
        <div class="col">
          <img class="pet-img" src={pet} alt="pet" width="80%" />
        </div>

        <div class="col position-custom">
          <div class="greeting">
            <span class="hello">Hello!</span>
            <span class="lets">Let's get started!</span>
          </div>

          <table class="field">
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  class="form-control signup"
                  id="fullname"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(event) => {
                    setFullname(event.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control signup"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  type="email"
                  class="form-control signup"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  class="form-control signup"
                  id="password1"
                  placeholder="Password"
                  value={password1}
                  onChange={(event) => {
                    setPassword1(event.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  type="password"
                  class="form-control signup"
                  id="password2"
                  placeholder="Confirm password"
                  value={password2}
                  onChange={(event) => {
                    setPassword2(event.target.value);
                  }}
                ></input>
              </td>
            </tr>
          </table>

          <button onClick={register} class="signup_btn" type="submit">
            Sign Up
          </button>

          <span className="to_login">
            {" "}
            Already a member?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#00A6A6" }}
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
