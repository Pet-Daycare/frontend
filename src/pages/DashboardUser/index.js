import React from 'react'
import './index.css'
import HeaderDashboard from '../../components/HeaderDashboard'
import NavigationCustomer from '../../components/Navigation_Customer'
import WelcomeHeadCustomerDasboard from '../../components/WelcomeHeadCustomerDasboard'
import CardBalance from '../../components/CardBalanceCustomer';
import TableInCustomer from '../../components/TableInCustomer';


function Dashboard() {
  const empty = () => {
    return (
      <p className='d-flex justify-content-center empty-text'>
        You haven't made any reservation yet
      </p>

    )
  }

  const reserve = () => {
    return (
      <div className='reserve'>
        <p className='head-name'>Timmy</p>
        <div className='d-flex justify-content-between'>
          <div>
            <p>Status               : Dititipkan</p>
            <p>Tanggal pengembalian : 22/02/2023</p>
          </div>
          <button className='btn btn-change'>
            Ubah Pengembalian
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className='main-dashboard'>
      <HeaderDashboard />
      {/* <div className='container'>
        <div className='d-flex justify-content-between'>
          <p className='text-name-dash'>
            Hai, Jane
          </p>
  
            <button className='btn btn-reserve btn-block'>
            Book Reservation
          </button>
        </div>

        <div className='mt-5'>
          {reserve()}
        </div>
      </div> */}
      <div className='row'>
        <div className='col-3'><NavigationCustomer/></div>
        <div className='col-9 p-5'>
          <WelcomeHeadCustomerDasboard/>
          <hr/>
          <CardBalance/>
          <TableInCustomer className='p-2'/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
