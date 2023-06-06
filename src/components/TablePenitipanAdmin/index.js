import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./index.scss";

import { useNavigate } from "react-router-dom";

function TablePenitipanAdmin() {
  const [data, loadData] = useState([]);

  const navigate = useNavigate();

  const topup = data;

  async function handleVerif(item) {
    // TODO: LOGIC
    console.log(item.userId);

    let response = await axios
      .put(
        // "http://localhost:8082/api/v1/Penitipan/verify/" + item.userId
        "http://34.142.203.183/api/v1/Penitipan/verify/" + item.userId
      )
      .catch((err) => alert(err));

    console.log(response);
    alert("Verification successful!");
    navigate("./");
  }

  useEffect(() => {
    const dataRes = async () => {
      let response = await axios
        .get("http://34.142.203.183/api/v1/Penitipan/find/all")
        .catch((err) => alert(err));
      console.log("--------------");
      console.log(response);
      console.log("--------------");

      loadData(response.data);
      console.log(data);
    };
    dataRes();
  }, []);

  return (
    <div className="table-penitipan">
      <table>
        {topup.map((item) => (
          <tr>
            <td>
              <p className="pet-name">{item.hewan.nama}</p>
              <p className=""></p>

              {console.log(item.hewan.nama)}
            </td>
            <td>
              <p className="pickup-date"></p>
            </td>
            <td>
              <p className="status">{item.statusPenitipan}</p>
            </td>
            {console.log(item.statusPenitipan)}
            {item.statusPenitipan == "UNVERIFIED_PENITIPAN" && (
              <td>
                {/* <button className='detail-button' onClick={handleVerif(item.id.toString())}> Verifikasi </button> */}
                <button
                  className="detail-button"
                  onClick={() => handleVerif(item)}
                >
                  {" "}
                  Verifikasi{" "}
                </button>
              </td>
            )}
            {item.statusPenitipan == "VERIFIED_PENITIPAN" && (
              <td>
                <button className="detail-button-verified" disabled={true}>
                  {" "}
                  VERIFIED{" "}
                </button>
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TablePenitipanAdmin;
