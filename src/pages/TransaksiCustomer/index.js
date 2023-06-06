import HeaderDashboard from "../../components/HeaderDashboard";
import NavigationCustomer from "../../components/Navigation_Customer";
import WelcomeHeadCustomerDasboard from "../../components/WelcomeHeadCustomerDasboard";
import CardBalance from "../../components/CardBalanceCustomer";
import TableInCustomer from "../../components/TableInCustomer";
import TopUp from "../TopUpWallet";

import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

function TransaksiCustomer() {
  const [data, loadData] = useState([]);

  const topup = data;

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");
  const myid = window.localStorage.getItem("id");

  console.log(myid);

  useEffect(() => {
    console.log(username);
    console.log(token);

    const history = async () => {
      let response = await axios
        .get("http://localhost:8082/api/v1/Penitipan/me/frontend", {
          params: {
            userId: myid,
          },
        })
        .catch((err) => alert(err));

      loadData(response.data);
      console.log(response.data);
    };
    history();

    // console.log(historyTopUp)
  }, []);

  return (
    <div className="all-transaction">
      <HeaderDashboard />
      <div className="row">
        <div className="col-3">
          <NavigationCustomer />
        </div>
        <div className="col-9 p-5">
          <h2>All Transaction</h2>
          <div>
            <div className="row">
              <div className="col-3">
                <p className="mb-0">Pet Name</p>
              </div>
              <div className="col-7 text-center">
                <p className="mb-0">Tanggal Penitipan</p>
              </div>
              <div className="col-2 text-center">
                <p className="mb-0">Status</p>
              </div>
            </div>
            <hr />

            {topup.map((item) => (
              <div className="mt-2">
                <div className="row">
                  <div className="col-3">
                    <p className="mb-0">{item.hewan.nama}</p>
                  </div>
                  <div className="col-7 text-center">
                    <p className="mb-0">
                      {" "}
                      {item.tanggalPenitipan[0] +
                        "-" +
                        item.tanggalPenitipan[1] +
                        "-" +
                        ("0" + item.tanggalPenitipan[2]).slice(-2)}
                    </p>
                  </div>
                  <div className="col-2 text-center">
                    <p className="mb-0">{item.statusPenitipan}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransaksiCustomer;
