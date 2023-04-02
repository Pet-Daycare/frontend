import React from "react";
import "./index.css";
import pet from "../../assets/pet.svg";
import { Link } from "react-router-dom";
import HeaderLanding from "../../components/HeaderLanding";

function LandingPage() {
  return (
    <div class="landing-page">
      <HeaderLanding />
      <div class="row">
        <div class="col">
          <img class="pet-img" src={pet} alt="pet" width="80%" />
        </div>

        <div class="col position-custom">
          <div class="greeting">
            <span class="slogan">We care ―</span>
            <span class="slogan">We play!&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>

          <p class="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>

          <Link to='/login'><button class="book_btn">Book reservation</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
