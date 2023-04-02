import React, { useState } from "react";

function HeaderAdmin() {
  const [date, setDate] = useState();

  function getDate() {
    const d = new Date();
    console.log(dates[d.getDay()]);
    const day = dates[d.getDay()];

    setDate(
      dates[d.getDay()] +
        ", " +
        d.getDate() +
        " " +
        month[d.getMonth()] +
        " " +
        d.getFullYear()
    );
  }

  const dates = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
  ];

  if (date == null) {
    getDate();
  }

  return (
    <div>
      <h3>Admin Dashboard</h3>
      <p>{date}</p>
    </div>
  );
}

export default HeaderAdmin;
