import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './index.css'
import HeaderLogout from '../../components/HeaderLogout'
import { useNavigate } from "react-router-dom";

function TopUp() {
  const navigate = useNavigate();
  const [nominal, setNominal] = useState();

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


  async function handleSubmit (e) {
    // TODO: LOGIC
    console.log(nominal)

    let response = await axios.post(
      "http://localhost:8081/api/customer/topup/create",
      {
        "username": username,
        token: token,
        "typeMethod": "OVO_TRANSFER",
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
      </div>
    </div>
  )
}

export default TopUp
