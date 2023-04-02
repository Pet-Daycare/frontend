import React from 'react';
import './index.scss';

import TopUpButton from '../../assets/Wallet-disable.svg'
import { Link } from 'react-router-dom';

function CardBalance() {
  return (
    <div className='card-balance'>
      
        <div className='info-bal'>
            <p>Your current balance</p>
            <h3>Rp 21.000,00</h3>
        </div>
        <hr/>
        <div className='toggle-btn'>
            <Link to='/dashboard/topup' className='d-flex '>
                <img src={TopUpButton}/>
                <p>Top up balance</p>
            </Link>
        </div>
    </div>
  )
}

export default CardBalance;
