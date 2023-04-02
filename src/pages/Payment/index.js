import React from "react";
import "./index.css";
import HeaderLogout from "../../components/HeaderLogout";
import { useEffect, useState } from "react";
import PetWallet from "./PetWallet";
import Voucher from "./voucher";

function Payment() {
  const [method, setMethod] = useState("PetWallet");
  const [PetWalletContentVisible, setPetWalletContentVisible] = useState(true);
  const [VoucherContentVisible, setVoucherContentVisible] = useState(false);

  useEffect(() => {
    method === "PetWallet"
      ? setPetWalletContentVisible(true)
      : setPetWalletContentVisible(false);
    method === "voucher"
      ? setVoucherContentVisible(true)
      : setVoucherContentVisible(false);
  }, [method]);

  const handleOnChange = (e) => {
    setMethod(e.target.value);
  };

  return (
    <div class="change-page">
      <HeaderLogout />

      <div className="container d-flex flex-column align-items-center">
        <span className="title">Payment</span>

        <div className="container-date">
          <form className="text-decs">
            <label for="method" class="label_custom">
              Payment method
            </label>
            <select
              class="form-select"
              id="method"
              value={method}
              onChange={handleOnChange}
            >
              <option value="PetWallet" selected>
                PetWallet
              </option>
              <option value="voucher">Voucher</option>
            </select>
          </form>

          {PetWalletContentVisible && <PetWallet />}
          {VoucherContentVisible && <Voucher />}

          <div class="row justify-content-center button_group">
            <div class="col-5"></div>
            <div class="col-4">
              <button class="cancel_btn">Cancel</button>
            </div>
            <div class="col-3">
              <button class="pay_btn">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
