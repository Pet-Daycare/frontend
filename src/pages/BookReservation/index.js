import React from 'react'
import './index.scss';
function BookReservation() {
  return (
    <div className='res-cus'>
      <h1>
        Book Reservation
      </h1>

     <form>
        <span className='row'>
            <div className='col-6'>
                <p>
                    Pet’s name
                </p>
                <input 
                type="text"
                >
                </input>
            </div>
            <div className='col-6'>
                <p>
                    Pet’s Type
                </p>
                <input 
                type="text"
                >
                </input>
            </div>
        </span>
        <span className='row'>
            <div className='col-6'>
                <p>
                    Pet's Weight
                </p>
                <input 
                type="text"
                >
                </input>
            </div>
            <div className='col-6'>
                <p>
                    Additional message
                </p>
                <input 
                type="text"
                >
                </input>
            </div>
        </span>
        <span className='row'>
            <div className='col-6'>
                <p>
                    Check-in
                </p>
                <input 
                type="text"
                >
                </input>
            </div>
            <div className='col-6'>
                <p>
                    Checkout
                </p>
                <input 
                type="text"
                >
                </input>
            </div>
        </span>
        <span>
          <button>Cancel</button>
        <button>Book Reservation</button>
      </span>
     </form>
      
    </div>
  )
}

export default BookReservation
