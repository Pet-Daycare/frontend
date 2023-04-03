import React from 'react';
import './index.scss';

function TableTransaksiAdmin(){
    return (
        <div className='table-transaksi'>
            <table>
                <tr>
                    <td>
                        <p className='pet-name'>Moka</p>
                        <p className='owner'>by Ozan</p>
                    </td>
                    <td>
                        <p className='pickup-date'>02 - 04 April 2023</p>
                    </td>
                    <td>
                        <p className='status'>Rp 500.000,00</p>
                    </td>
                    <td>
                        <button className='detail-button'>Verifikasi</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default TableTransaksiAdmin;