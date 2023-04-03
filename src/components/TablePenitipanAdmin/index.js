import React from 'react';
import './index.scss';

function TablePenitipanAdmin(){
    return (
        <div className='table-penitipan'>
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
                        <p className='status'>Active</p>
                    </td>
                    <td>
                        <button className='detail-button'>Lihat detail</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default TablePenitipanAdmin;