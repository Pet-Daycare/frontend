import React from "react";
import "./index.css";
import HeaderLogout from "../../components/HeaderLogout";

function BookReservation() {
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
              ></input>
            </td>
            <td class="form">
              <label>Additional message</label>
              <input
                type="text"
                class="form-control book"
                id="additional_message"
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
              ></input>
            </td>
            <td class="form">
              <label>Check-out</label>
              <input
                type="date"
                class="form-control book"
                id="check-out"
              ></input>
            </td>
          </tr>
        </table>

        <div class="row justify-content-end button_group">
          <div class="col-2"></div>
          <div class="col-5">
            <button class="cancel_btn">Cancel</button>
          </div>
          <div class="col-5">
            <button class="book_btn">Book reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookReservation;
