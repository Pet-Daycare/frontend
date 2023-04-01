import React from "react";
import "./index.css";
import HeaderLogout from "../../components/HeaderLogout";

function ChangeDate() {
  return (
    <div class="change-page">
      <HeaderLogout />

      <div className="container d-flex flex-column align-items-center">
        <span className="title">Change date</span>

        <div className='container-date' >

            <form className='text-decs' >
                <label for="checkin_date" class="label_custom">
                    You've checked-in on
                </label>
                <input
                type="text"
                class="form-control"
                id="checkin_date"
                placeholder="22/02/2022"
              disabled></input>
              <label for="checkout_date" class="label_custom">
                    Check-out
                </label>
                <input
                type="date"
                class="form-control"
                id="checkout_date"
                placeholder="22/02/2022"
              ></input>
            </form>

            <div className='d-flex justify-content-between'>
                <p>Additional charge</p>
                <p>50.000</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Refund amount</p>
                <p>0</p>
            </div>
            <div className='d-flex justify-content-between text-decs'>
                <p>Total price</p>
                <p>120.000</p>
            </div>

            <div class="row justify-content-center button_group">
          <div class="col-3"></div>
          <div class="col-4">
            <button class="cancel_btn">Cancel</button>
          </div>
          <div class="col-5">
            <button class="change_btn">Make change</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeDate;
