import React from 'react';
import './index.scss';

function TablePengambilanAdmin(){
    return (
        <div className='table-pengambilan'>
            <table>
                <tr>
                    <td>
                        <p className='pet-name'>Moka</p>
                        <p className='owner'>by Ozan</p>
                    </td>
                    <td>
                        <p className='pickup-date'>04 April 2023, at 12:00 PM</p>
                    </td>
                    <td>
                        <p className='status'>Rp 500.000,00</p>
                    </td>
                    <td>
                        <button className='detail-button'>Diambil</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default TablePengambilanAdmin;