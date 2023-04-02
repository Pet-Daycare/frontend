import React from 'react';
import './index.scss';

const item = () => {
    return (<div className='item-tb'>
        <div className='row'>
            <p className='col-1 text-center'>1</p>
            <p className='col-3'>Bobon</p>
            <p className='col-3 text-center'>13 April 2023</p>
            <p className='col-2 text-center'>Dititip</p>
            <a href='' className='col-3 text-center'>
                <p>Lihat Detail</p>
            </a>
        </div>
        <hr/>
    </div>)
}

const noItem = () => {
    return (<div className='no-item'>
        <p className='text-center'>You haven't made any reservation yet</p>
    </div>)
}
function TableInCustomer() {
  return (
    <div className='tb-customer'>
      <div className='row head-row'>
        <p className='col-1'>No</p>
        <p className='col-3'>Pet Name</p>
        <p className='col-3'>Pick Up Date</p>
        <p className='col-2'>Status</p>
        <div className='col-3'></div>
      </div>
      <hr/>
      {
      noItem()
      }
      
    
    </div>
  )
}

export default TableInCustomer
