import React from 'react'
import './index.css'
import HeaderDashboard from '../../components/HeaderDashboard'

function index() {
  return (
    <div className='main-dashboard'>
      <HeaderDashboard/>
      <div className='container d-flex flex-column align-items-center'>
        <h1 className='head-text m-5'>
            Top Up PetWallet
        </h1>
        <div className='container-topup' >
            <div className='d-flex justify-content-between text-decs'>
                <p>Your balance</p>
                <p>230.000</p>
            </div>

            <form className='text-decs' >
                <label>
                    Enter nominal
                </label>
                <div className='mt-2'>
                    <input type='text' className='input'/>
                </div>
            </form>

            <div className='mt-4'>
                <button className='btn cancel-btn'>
                    Cancel
                </button>
                <button className='btn btn-change'>
                    Top Up
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
