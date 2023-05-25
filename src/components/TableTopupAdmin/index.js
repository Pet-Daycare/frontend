import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './index.scss';

import { useNavigate } from "react-router-dom";

const TableTopupAdmin = props =>{
    const [data, loadData] = useState([]);
    
    const navigate = useNavigate();

    const topup = data

async function handleVerif(item) {
    // TODO: LOGIC
    console.log(item.id)

    let response = await axios.put(
        "http://localhost:8081/api/customer/topup/detail/aproval/" + item.id
    ).catch((err) => alert(err));

    
    console.log(response);
    alert("Verification successful!")
    navigate('./')
    }

    useEffect(() => {
        const dataRes = async () => {
        let response = await axios.get("http://localhost:8081/api/customer/topup/detail/all")
        .catch((err) => alert(err));
        console.log("--------------");
        console.log(response);
        console.log("--------------");

        loadData(response.data)
        console.log(data)
        
      };
      dataRes();
    }, []);

    

    return (
        <div className='table-topup'>
            <table>
                {topup.map(item => (
                    <tr>
                        <td>
                            <p className='username'>{item.username}</p>
                        </td>
                        <td>
                            <p className='time-date'>{item.timeTaken}</p>
                        </td>
                        <td>
                            <p className='status'>Rp {item.nominal},00</p>
                        </td>
                        {console.log(item.id)}
                        {item.validate == false  &&
                            <td>
                                {/* <button className='detail-button' onClick={handleVerif(item.id.toString())}> Verifikasi </button> */}
                                <button className='detail-button' onClick={() => handleVerif(item)}> Verifikasi </button>
                            </td>
                        }
                        {item.validate == true  &&
                            <td>
                                <button className='detail-button-verified' disabled = {true}> Success </button>
                            </td>
                        }
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default TableTopupAdmin;