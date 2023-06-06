import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./index.scss";
import { useNavigate } from "react-router-dom";

import NavigationAdmin from "../../components/NavigationAdmin";
import ImageHeadLine from "../../assets/image-people.svg";
import HeaderAdmin from "../../components/HeaderAdmin";

function CouponFrontend() {
  const navigate = useNavigate();
  const [nominal, setNominal] = useState();

  async function handleSubmit(e) {
    let response = await axios
      .post(
        // "http://localhost:8081/api/coupon/admin/coupon/add",
        "http://34.172.96.175/api/coupon/admin/coupon/add",
        {
          discount: nominal,
        }
      )
      .catch((err) => alert(err));

    console.log(response);
    alert(
      "Add " +
        response.data.discount +
        "% coupon successful! The code is " +
        response.data.code
    );
  }

  return (
    <div className="row">
      <div className="col-3">
        <NavigationAdmin activeSelect="COUPON" />
      </div>
      <div className="col-9 main-dash-admin">
        <HeaderAdmin />

        <div className="row welcome-admin-tag">
          <div className="col-6 tag-decs">
            <h3>Add Coupon</h3>
            <form className="text-decs">
              <input
                type="text"
                class="form-control"
                id="nominal"
                placeholder="Your discount.."
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              ></input>
            </form>
            <div class="row justify-content-center button_group">
              <div class="col-4"></div>
              <div class="col-4">
                <button class="topup_btn" onClick={handleSubmit}>
                  Add Voucher
                </button>
              </div>
            </div>
          </div>
          <img className="col-6" src={ImageHeadLine} />
        </div>
      </div>
    </div>
  );
}

export default CouponFrontend;
