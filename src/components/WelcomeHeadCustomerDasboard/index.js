import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./index.scss";

function WelcomeHeadCustomerDasboard() {
  const [data, loadData] = useState("");

  useEffect(() => {
    const dataRes = async () => await getData();
    dataRes();
  }, []);

  const getData = () => {
    // axios
    //   .get(
    //     "http://104.198.131.227/api/v1/auth/verify-token/" +
    //       window.localStorage.getItem("token"),
    //     {
    //       headers: {
    //         Authorization: "Bearer " + window.localStorage.getItem("token"),
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
    //         "Access-Control-Allow-Credentials": "true",
    //         "Access-Control-Max-Age": "1800",
    //         "Access-Control-Allow-Headers": "content-type",
    //       },
    //     }
    //   )
    //   .then((data) => loadData(data.data))
    //   .catch((err) => alert(err));
  };

  const name = data.username;
  return (
    <div className="welcome-head-cus-dash">
      <h1>Hei, {window.localStorage.getItem("username")}</h1>
      <p>
        Welcome to the Pet Day Care customer dashboard! We're thrilled to have
        you as a valued client and member of our pet care family.
      </p>
    </div>
  );
}

export default WelcomeHeadCustomerDasboard;
