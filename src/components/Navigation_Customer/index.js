import React from 'react'
import AddButton from '../../assets/add-penitipan-customer.svg';
import DashboardActiveIcon from '../../assets/dashboard-customer-icon.svg';
import TransaksiIcon from '../../assets/transaksi-disable.svg';
import HistoryTransaksiIcon from '../../assets/Wallet-disable.svg';

import './index.scss';

function NavigationCustomer() {
  return (
    <div className='nav-customer'>
        <div className='book-btn'>
            <p>
                Book Reservation
            </p>
            <a href=''>
                <img src={AddButton}/>
            </a>
        </div>
        
        <div className='toggle-nav'>
            <a href='' className='d-flex justify-content-between'>
                <img src={DashboardActiveIcon}/>
                <p className='active-nav-btn'>Dashboard</p>
            </a>
            <a href='' className='d-flex justify-content-between '>
                <img src={TransaksiIcon}/>
                <p>Transaksi</p>
            </a>
            <a href='' className='d-flex justify-content-between '>
                <img src={HistoryTransaksiIcon}/>
                <p>History Transaction</p>
            </a>
        </div>
    </div>
  )
}

export default NavigationCustomer
