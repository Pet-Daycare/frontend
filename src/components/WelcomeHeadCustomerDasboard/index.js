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
    axios
      .get(
        "http://localhost:8080/api/v1/auth/verify-token/" +
          window.localStorage.getItem("token")
      )
      .then((data) => loadData(data.data))
      .catch((err) => alert(err));
  };

  const name = data.username;
  return (
    <div className="welcome-head-cus-dash">
      <h1>Hei, {name}</h1>
      <p>
        Welcome to the Pet Day Care customer dashboard! We're thrilled to have
        you as a valued client and member of our pet care family.
      </p>
    </div>
  );
}

export default WelcomeHeadCustomerDasboard;
