import React, { useEffect, useState } from "react";
import NavigationCustomer from "../../components/Navigation_Customer";
import "./index.scss";
import axios from "axios";

function TopUpHistoryCustomer() {
  const [data, loadData] = useState([]);

  const topup = data;

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    console.log(username);
    console.log(token);

    const history = async () => {
      let response = await axios
        // .get("http://localhost:8081/api/customer/detail/frontend", {
        .get("http://34.172.96.175/api/customer/detail/frontend", {
          params: {
            username: username,
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
    <div className="history-tp-pg row">
      <div className="col-3">
        <NavigationCustomer activeSelect="TOPUP" />
      </div>
      <div className="col-9 main">
        <h2>History Top Up</h2>
        <div className="mt-3">
          <div className="row">
            <p className="col-2">ID</p>
            <p className="col-2 text-center">Tanggal TopUp</p>
            <p className="col-3 text-center">Metode TopUp</p>
            <p className="col-2 text-center">Jumlah TopUp</p>
            <p className="col-2 text-center">status</p>
          </div>
          <hr />
          {topup.map((item) => (
            <div>
              <div className="row mt-2">
                <p className="col-2 mb-0">{item.id.slice(-10)}</p>
                <p className="col-3 text-center"> {item.timeTaken}</p>
                <p className="col-2 mb-0">{item.typeMethod}</p>
                <p className="col-2 mb-0">{item.nominal}</p>
                <p className="col-2 mb-0">
                  {item.validate ? "Success" : "Not Verified"}
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopUpHistoryCustomer;
