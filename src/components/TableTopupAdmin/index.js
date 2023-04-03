import React from 'react';
import './index.scss';

function TableTopupAdmin(){
    return (
        <div className='table-topup'>
            <table>
                <tr>
                    <td>
                        <p className='username'>Ozan</p>
                    </td>
                    <td>
                        <p className='time-date'>04 April 2023, at 12:00 PM</p>
                    </td>
                    <td>
                        <p className='status'>Rp 100.000,00</p>
                    </td>
                    <td>
                        <button className='detail-button'>Verifikasi</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default TableTopupAdmin;