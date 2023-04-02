import React from "react";
import "./index.css";

function Voucher() {
  return (
    <div className="voucher-page">
      <form className="text-decs">
        <label for="voucher" class="label_custom">
          Voucher
        </label>
        <input
          type="text"
          class="form-control"
          id="voucher"
          placeholder="Voucher code"
        ></input>
      </form>
      <div className="d-flex justify-content-between">
        <p>Voucher amount</p>
        <p>120.000</p>
      </div>
      <div className="d-flex justify-content-between text-decs">
        <p>Total price</p>
        <p>120.000</p>
      </div>
    </div>
  );
}

export default Voucher;
