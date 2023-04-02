import React, { useState } from "react";
import './index.css'
import HeaderLogout from '../../components/HeaderLogout'
import { useNavigate } from "react-router-dom";

function TopUp() {
  const navigate = useNavigate();
  const [nominal, setNominal] = useState();

  const handleSubmit = (e) => {
    // TODO: LOGIC

     navigate('/dashboard')
  }

  const handleCancel = (e) => {
    // TODO: LOGIC

     navigate('/dashboard')
  }
  return (
    <div className='topup-page'>
      <HeaderLogout/>
      <div className='container d-flex flex-column align-items-center'>
        <h1 class='title'>
            Top Up PetWallet
        </h1>
        <div className='container-topup' >
            <div className='d-flex justify-content-between text-decs'>
                <p>Your balance</p>
                <p>230.000</p>
            </div>

            <form className='text-decs' >
                <label className='label_custom'>
                    Enter nominal
                </label>
                <input
                type="text"
                class="form-control"
                id="nominal"
              ></input>
            </form>

            <div class="row justify-content-center button_group">
          <div class="col-4"></div>
          <div class="col-4">
            <button class="cancel_btn" onClick={handleCancel}>Cancel</button>
          </div>
          <div class="col-4">
            <button class="topup_btn" onClick={handleSubmit}>Top Up</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TopUp
