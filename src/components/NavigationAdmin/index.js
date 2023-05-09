import React, { useState } from "react";
import "./index.scss";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import LogoPetDayCare from "../../assets/logo-icon-petday-care.svg";
import AddPenitipanAdmin from "../../assets/add-penitipan-admin.svg";

import DashboardActive from "../../assets/home-active.svg";
import DashboardDisable from "../../assets/home-disable.svg";

import PenitipanActive from "../../assets/penitipan-active.svg";
import PenitipanDisable from "../../assets/penitipan-disable.svg";

import TransaksiActive from "../../assets/transaction-active.svg";
import TransaksiDisable from "../../assets/transaction-disable.svg";

import TopUpActive from "../../assets/wallet-active.svg";
import TopUpDisable from "../../assets/Wallet-disable.svg";

import LogOut from "../../assets/log-out.svg";
import axios from "axios";

function NavigationAdmin({ activeSelect }) {
  const navigate = useNavigate();

  // async function handleLogout() {
  //   let token = window.localStorage.getItem("token");
  //   console.log(token);

  //   let link = "http://localhost:8080/api/v1/auth/logout/" + token;
  //   console.log(link);
  //   try {
  //     await axios.post(link);

  //     window.localStorage.clear();

  //     console.log(window.localStorage.getItem("token"));

  //     alert("Logout Successful");

  //     navigate("/");
  //   } catch (e) {
  //     alert("Something Happened");
  //   }
  // }

  // JIKA TIDAK MENGAKTIFKAN MAKA set Active Select = FALSE
  return (
    <div className="nav-admin">
      <div className="img-logo">
        <img src={LogoPetDayCare} alt="logo-pet-day-care" />
      </div>

      <div className="btn-penitipan">
        <p>Buat Penitipan</p>
        <Link to="/admin/tambah-penitipan">
          <img src={AddPenitipanAdmin} />
        </Link>
      </div>

      <hr />
      <div className="toggle-nav-ad">
        <Link
          to="/admin/"
          className={`d-flex ${
            activeSelect == "DASHBOARD" ? "active-toggle" : ""
          }`}
        >
          <img
            src={
              activeSelect == "DASHBOARD" ? DashboardActive : DashboardDisable
            }
          />
          <p>Dashboard</p>
        </Link>
        <Link
          to="/admin/daftar-penitipan"
          className={`d-flex ${
            activeSelect == "PENITIPAN" ? "active-toggle" : ""
          }`}
        >
          <img
            className=""
            src={
              activeSelect == "PENITIPAN" ? PenitipanActive : PenitipanDisable
            }
          />
          <p className="">Penitipan</p>
        </Link>
        <Link
          to="/admin/transaksi"
          className={`d-flex ${
            activeSelect == "TRANSAKSI" ? "active-toggle" : ""
          }`}
        >
          <img
            src={
              activeSelect == "TRANSAKSI" ? TransaksiActive : TransaksiDisable
            }
          />
          <p>Transaksi</p>
        </Link>
        <Link
          to="/admin/top-up"
          className={`d-flex ${activeSelect == "TOPUP" ? "active-toggle" : ""}`}
        >
          <img src={activeSelect == "TOPUP" ? TopUpActive : TopUpDisable} />
          <p>Top Up</p>
        </Link>
      </div>

      <hr />

      <div className="log-out mx-auto">
        {/* <Link onCLick={handleLogout} className="d-flex"> */}
        <Link to="/" className="d-flex">
          <img src={LogOut} />
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
}

export default NavigationAdmin;
