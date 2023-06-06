import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./index.scss";

import { useNavigate } from "react-router-dom";

function TableTransaksiAdmin() {
  const [data, loadData] = useState([]);

  const navigate = useNavigate();

  const topup = data;

  async function handleVerif(item) {
    // TODO: LOGIC
    console.log(item.id);

    // let response = await axios
    //   .put("http://localhost:8081/api/customer/topup/detail/aproval/" + item.id)
    //   .catch((err) => alert(err));

    // console.log(response);
    alert("Verification successful!");
    navigate("./");
  }

  useEffect(() => {
    const dataRes = async () => {
      let response = await axios
        .get("http://localhost:8081/api/payment/admin/all-bills")
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
    <div className="table-transaksi">
      <table>
        {topup.map((item) => (
          <tr>
            <td>
              <p className="pet-name">{item.username}</p>
              {/* <p className='owner'>by {item.userId}</p> */}
            </td>
            <td>
              <p className="status">{item.total}</p>
            </td>
            <td>
              <button
                className="detail-button"
                onClick={() => handleVerif(item)}
              >
                Verifikasi
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TableTransaksiAdmin;
