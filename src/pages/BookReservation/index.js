import React, { useState } from "react";
import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import HeaderLogout from '../../components/HeaderLogout'

function BookReservation() {
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

    let type = petType.toUpperCase()
    console.log(petName)
    console.log(type);
    console.log(petWeight);
    console.log(message);
    console.log(startDate+"T14:00:00.000");
    console.log(endDate+"T15:00:00.000");
    console.log(token)

    console.log(data.username)
    console.log(data.id)

    let tanggalTitip = startDate+"T00:00:00.000"
    let tanggalPengambilan = endDate+"T15:00:00.000"


    let response = await axios.post(
      "http://localhost:8082/api/v1/Penitipan/create",
      {
        namaHewan: petName,
        tipeHewan: type,
        beratHewan: petWeight,
        pesanPenitipan: message,
        tanggalPenitipan: tanggalTitip,
        tanggalPengambilan: tanggalPengambilan,
        userId: data.id,
        username: data.username
      }
    ).catch((err) => alert(err));

    window.localStorage.setItem("penitipanId", response.data.id)

    console.log(localStorage.getItem("penitipanId"))


    console.log(response);
    // alert("Reservation successful! Please wait for admin verification..")
    navigate('./payment')
  }

  const handleCancel = (e) => {
    // TODO: LOGIC

     navigate('/dashboard')
  }
  return (
    <div class="book-page">
      <HeaderLogout />

      <div className="container d-flex flex-column align-items-center">
        <span className="title">Book Reservation</span>

        <table>
          <tr>
            <td class="form">
              <label>Pet's name</label>
              <input
                type="text"
                class="form-control book"
                id="pet_name"
                onChange={(e) => setPetName(e.target.value)}
              ></input>
            </td>
            <td class="form">
              <label>Pet's type</label>
              <select onChange={(e) => setPetType(e.target.value)} class="form-select book" id="pet_type">
                <option value="" disabled selected>
                  Select type
                </option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Other">Other</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="form">
              <label>Pet's weight</label>
              <input
                type="text"
                class="form-control book"
                id="pet_weight"
                onChange={(e) => setPetWeight(e.target.value)}
              ></input>
            </td>
            <td class="form">
              <label>Additional message</label>
              <input
                type="text"
                class="form-control book"
                id="additional_message"
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td class="form">
              <label>Check-in</label>
              <input
                type="date"
                class="form-control book"
                id="check-in"
                onChange={(e) => setStartDate(e.target.value)}
              ></input>
            </td>
            <td class="form">
              <label>Check-out</label>
              <input
                type="date"
                class="form-control book"
                id="check-out"
                onChange={(e) => setEndDate(e.target.value)}
              ></input>
            </td>
          </tr>
        </table>

        <div class="row justify-content-end button_group">
          <div class="col-2"></div>
          <div class="col-5">
            <button class="cancel_btn" onClick={handleCancel}>Cancel</button>
          </div>
          <div class="col-5">
            <button class="book_btn" onClick={handleSubmit}>Book reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookReservation;
