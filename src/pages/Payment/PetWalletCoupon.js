import React from "react";
import "./index.css";

function PetWalletCoupon({
  balance,
  totalPembayaran,
  couponCode,
  onCouponCodeChange,
}) {
  return (
    <div className="PetWallet-page">
      <form className="text-decs">
        <label for="coupon" class="label_custom">
          Coupon
        </label>
        <input
          type="text"
          class="form-control"
          id="coupon"
          placeholder="Coupon code"
          value={couponCode}
          onChange={onCouponCodeChange}
        ></input>
      </form>
      <div className="d-flex justify-content-between">
        <p>PetWallet</p>
        <p>(balance: {balance})</p>
      </div>
      <div className="d-flex justify-content-between text-decs">
        <p>Total price</p>
        <p>{totalPembayaran}</p>
      </div>
    </div>
  );
}

export default PetWalletCoupon;
