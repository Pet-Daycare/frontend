import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./index.scss";

import TopUpButton from "../../assets/Wallet-disable.svg";
import { Link } from "react-router-dom";

function CardBalance() {
  const [data, loadData] = useState("");

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");

  console.log(username);
  console.log(token);


  useEffect(() => {
    const dataRes = async () => {
      let response = await axios.get("http://localhost:8081/api/customer/frontend", { 
        params: 
          { username: username, 
            token: token
          } 
      }
    ).then((data) => loadData(data.data))
    .catch((err) => alert(err));
      console.log(data);
    };
    //s
    dataRes();
  }, []);

  return (
    <div className="card-balance">
      <div className="info-bal">
        <p>Your current balance</p>
        <h3>Rp {data.balance},00</h3>
      </div>
      <hr />
      <div className="toggle-btn">
        <Link to="/dashboard/topup" className="d-flex ">
          <img src={TopUpButton} />
          <p>Top up balance</p>
        </Link>
      </div>
    </div>
  );
}

export default CardBalance;
