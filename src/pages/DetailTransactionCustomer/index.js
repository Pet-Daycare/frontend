import React from 'react'
import './index.scss';

function DetailTransactionCustomer() {
  return (
    <div>
      <div>
        <h3>Detail Transaction</h3>
        <a><p>Edit Date</p></a>
      </div>

      <hr/>
      <div>
        <p>Customer Detail</p>
        <span className='d-flex'>
            <p>Transaction Number</p>
            <p>#3353</p>
        </span>
        <span className='d-flex'>
            <p>Customer Name</p>
            <p>Joko Budi</p>
        </span>
      </div>

      <hr/>
      
    </div>
  )
}

export default DetailTransactionCustomer
