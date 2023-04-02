import React from "react";
import "./index.css";

function PetWallet() {
  return (
    <div className="PetWallet-page">
      <div className="d-flex justify-content-between">
        <p>PetWallet</p>
        <p>(balance: 50.000)</p>
      </div>
      <div className="d-flex justify-content-between text-decs">
        <p>Total price</p>
        <p>120.000</p>
      </div>
    </div>
  );
}

export default PetWallet;
