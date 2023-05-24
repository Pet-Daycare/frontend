import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './index.css'
import HeaderLogout from '../../components/HeaderLogout'
import { useNavigate } from "react-router-dom";

import DanaLogo from '../../assets/dana_logo.png';
import GopayLogo from '../../assets/gopay_logo.ng.png';
import QrisLogo from '../../assets/qris_logo.png';
import BcaTransfer from '../../assets/bca_logo.png';
import MandiriTransfer from '../../assets/mandiri_logo.svg.png';

function TopUp() {
  const navigate = useNavigate();
  const [nominal, setNominal] = useState();
  const [method, setMethod] = useState();
  const [data, loadData] = useState("");

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");

  // console.log(username);
  // console.log(token);

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
    dataRes();
  }, []);

  const option = (type, urlLogo) => {
    return <div className={method == type ? 'option-active': 'option'} onClick={() => setMethod(type)}>
      <img className=""
       src={urlLogo}/>
      <p>{type}</p>
    </div>
  }

  async function handleSubmit (e) {
    // TODO: LOGIC
    console.log(nominal)

    switch(method) {
      case "Dana":
        setMethod("DANA")
        break;
      case "Gopay":
        setMethod("GOPAY")
        break;
      case "Qris":
        setMethod("QRIS")
        break;
      case "Mandiri Bank Transfer":
        setMethod("MANDIRI_BANK_TRANSFER")
        break;
      case "BCA Bank Transfe":
        setMethod("BCA_BANK_TRANSFER")
        break;
    }

    let m = method

    let response = await axios.post(
      "http://localhost:8081/api/customer/topup/create",
      {
        "username": username,
        token: token,
        "typeMethod": m.toUpperCase(),
        "nominal": nominal
      }
    ).catch((err) => alert(err));

    
    console.log(response);
    alert("Topup successful! Please wait for admin verification..")
    navigate('/dashboard')
  }

  const handleCancel = (e) => {
     navigate('/dashboard')
  }
  return (
    <div className='topup-page'>
      <HeaderLogout/>
      <div className='container d-flex flex-column align-items-center'>
        <h1 class='title'>
            Top Up PetWallet
        </h1>
        <div className='container-topup' >
            <div className='d-flex justify-content-between text-decs'>
                <p>Your balance</p>
                <p>{data.balance}</p>
            </div>
            <div className="">
            <p>Select a payment method</p>
              <div className="">
                {option("Dana", DanaLogo)}
                {option("Gopay", GopayLogo)}
                {option("Qris", QrisLogo)}
                {option("Mandiri Bank Transfer", MandiriTransfer)}
                {option("BCA Bank Transfer", BcaTransfer)}
              </div>
            </div>
            <form className='text-decs' >
                <label className='label_custom'>
                    Enter nominal
                </label>
                <input
                type="text"
                class="form-control"
                id="nominal"
                placeholder="Your nominal.."
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              ></input>
            </form>

            <div class="row justify-content-center button_group">
          <div class="col-4"></div>
          <div class="col-4">
            <button class="cancel_btn" onClick={handleCancel}>Cancel</button>
          </div>
          <div class="col-4">
            <button class="topup_btn" onClick={handleSubmit}>Top Up</button>
          </div>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default TopUp
