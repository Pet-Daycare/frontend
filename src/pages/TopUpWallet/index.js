import React from 'react'
import './index.css'
import HeaderLogout from '../../components/HeaderLogout'

function TopUp() {
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
            <button class="cancel_btn">Cancel</button>
          </div>
          <div class="col-4">
            <button class="topup_btn">Top Up</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TopUp
