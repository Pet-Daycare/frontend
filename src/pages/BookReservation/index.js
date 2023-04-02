import React, { useState } from "react";
import "./index.css";
import HeaderLogout from "../../components/HeaderLogout";
import { Link, useLocation, useNavigate } from "react-router-dom";

function BookReservation() {
  const navigate = useNavigate();

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petWeight, setPetWeight] = useState(0);
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    // TODO: LOGIC

     navigate('/dashboard')
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
              <select class="form-select book" id="pet_type">
                <option value="" disabled selected>
                  Select type
                </option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Other">Other</option>
                onChange={(e) => setPetType(e.target.value)}
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
