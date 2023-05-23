import React from 'react'
import AddButton from '../../assets/add-penitipan-customer.svg';
import DashboardActiveIcon from '../../assets/dashboard-customer-icon.svg';
import TransaksiIcon from '../../assets/transaksi-disable.svg';
import HistoryTransaksiIcon from '../../assets/Wallet-disable.svg';
import { Link } from 'react-router-dom';

import LogOut from "../../assets/log-out.svg";

import './index.scss';

function NavigationCustomer() {
  return (
    <div className='nav-customer'>
        <div className='book-btn'>
            <p>
                Book Reservation
            </p>
            <Link to='book-reservation'>
                <img src={AddButton}/>
            </Link>
        </div>
        
        <div className='toggle-nav'>
            <Link to='/dashboard' className='d-flex justify-content-between'>
                <img src={DashboardActiveIcon}/>
                <p className='active-nav-btn'>Dashboard</p>
            </Link>
            <Link to='/dashboard'  className='d-flex justify-content-between '>
                <img src={TransaksiIcon}/>
                <p>Transaksi</p>
            </Link>
            <Link to='/dashboard' className='d-flex justify-content-between '>
                <img src={HistoryTransaksiIcon}/>
                <p>History Transaction</p>
            </Link>
            <Link to="/" className='d-flex justify-content-between '>
          <     img src={LogOut} />
                <p>Log Out</p>
            </Link>
        </div>
        
    </div>
  )
}

export default NavigationCustomer
