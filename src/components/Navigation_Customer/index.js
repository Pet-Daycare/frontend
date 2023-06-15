import React from "react";
import AddButton from "../../assets/add-penitipan-customer.svg";
import DashboardActiveIcon from "../../assets/dashboard-customer-icon.svg";
import TransaksiIcon from "../../assets/transaksi-disable.svg";
import HistoryTransaksiIcon from "../../assets/Wallet-disable.svg";
import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";

import LogOut from "../../assets/log-out.svg";

import axios from "axios";

import "./index.scss";

function NavigationCustomer({ activeSelect }) {
  const navigate = useNavigate();

  async function handleLogout(e) {
    let token = window.localStorage.getItem("token");
    console.log(token);
    let header = "Bearer " + token;
    console.log(header);
    // http://104.198.131.227/api/v1/auth/login
    // let link = "http://localhost:8080/api/v1/auth/logout/" + token;
    let link = "http://104.198.131.227/api/v1/auth/logout/" + token;
    console.log(link);
    try {
      let res = await axios.post(link, {
        headers: {
          Authorization: "Bearer " + token,
          // "Content-Type": "application/json",
          // "Content-Length": 0,
          // Accept: "*/*",
          // "Accept-Encoding": "gzip, deflate, br",
          // Connection: "keep-alive",
          // "User-Agent": "PostmanRuntime/7.29.2",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Max-Age": "1800",
          "Access-Control-Allow-Headers": "content-type",
        },
      });

      console.log(res);

      // window.localStorage.clear();

      // console.log(window.localStorage.getItem("token"));

      alert("Logout Successful");

      // navigate("/");
    } catch (e) {
      alert("Something Happened");
    }
  }

  return (
    <div className="nav-customer">
      <div className="book-btn">
        <p>Book Reservation</p>
        <Link to="book-reservation">
          <img src={AddButton} />
        </Link>
      </div>

      <div className="toggle-nav">
        <Link to="/dashboard" className="d-flex justify-content-between">
          <img src={DashboardActiveIcon} />
          <p
            className={`${activeSelect == "DASHBOARD" ? "active-nav-btn" : ""}`}
          >
            Dashboard
          </p>
        </Link>
        {/* <Link to='/dashboard/transaksi'  className='d-flex justify-content-between '> */}
        <Link
          to="/dashboard/transaksi"
          className="d-flex justify-content-between"
        >
          <img src={TransaksiIcon} />
          <p
            className={`${activeSelect == "TRANSAKSI" ? "active-nav-btn" : ""}`}
          >
            Transaksi
          </p>
        </Link>
        <Link
          to="/dashboard/history-topup"
          className="d-flex justify-content-between "
        >
          <img src={HistoryTransaksiIcon} />
          <p className={`${activeSelect == "TOPUP" ? "active-nav-btn" : ""}`}>
            History Topup
          </p>
        </Link>
        {/* <Link onCLick={handleLogout} className="d-flex justify-content-between ">
                <img src={LogOut} />
                <p>Log Out</p>
                </Link> */}
        <br></br>
        <br></br>
        <br></br>
        <button
          class="logout_btn"
          style={{
            marginLeft: "25%",
            marginRight: "25%",
            width: "50%",
            textAlign: "center",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavigationCustomer;
