import React from "react";
import "./index.css";

function PetWallet({ balance, totalPembayaran }) {
  return (
    <div className="PetWallet-page">
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

export default PetWallet;
