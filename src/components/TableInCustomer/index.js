import React, { useState } from "react";
import "./index.scss";
import HeaderLogout from "../../components/HeaderLogout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const item = () => {
    return (<div className='item-tb'>
        <div className='row'>
            <p className='col-1 text-center'>1</p>
            <p className='col-3'>Bobon</p>
            <p className='col-3 text-center'>13 April 2023</p>
            <p className='col-2 text-center'>Dititip</p>
            <a href='' className='col-3 text-center'>
                <p>Lihat Detail</p>
            </a>
        </div>
        <hr/>
    </div>)
}


const noItem = () => {
    return (<div className='no-item'>
        <p className='text-center'>You haven't made any reservation yet</p>
    </div>)
}

function TableInCustomer(id) {
  
  const navigate = useNavigate();

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petWeight, setPetWeight] = useState(0);
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [data, loadData] = useState("");

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");
  

  // console.log(username);
  // console.log(token);
  // console.log(id.id)
  let myid = id.id;

  useEffect(() => {
    console.log(myid)

    const dataRes = async () => {
      let response = await axios.get("http://localhost:8082/api/v1/Penitipan/find/me", { 
        userId: myid
      }
    ).then(function (data) { 
      loadData(data.data)
    })
    .catch((err) => alert(err));

    console.log(data);
    };
    dataRes();

  }, []);




  return (
    <div className='tb-customer'>
      <div className='row head-row'>
        <p className='col-1'>No</p>
        <p className='col-3'>Pet Name</p>
        <p className='col-3'>Pick Up Date</p>
        <p className='col-2'>Status</p>
        <div className='col-3'></div>
      </div>
      <hr/>
      {
      noItem()
      }
      
    
    </div>
  )
}

export default TableInCustomer
