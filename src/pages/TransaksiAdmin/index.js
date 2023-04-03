import React from 'react'
import NavigationAdmin from '../../components/NavigationAdmin'
import HeaderAdmin from '../../components/HeaderAdmin'
import TableTransaksiAdmin from '../../components/TableTransaksiAdmin'

function TransaksiAdmin() {
  return (
    <div className="row">
      <div className="col-3">
        <NavigationAdmin activeSelect="TRANSAKSI" />
      </div>
      <div className="col-9 main-dash-admin">
        <HeaderAdmin/>

        <h3 className="title-admin">Transaksi</h3>

        <ul class="nav nav-pills">
          <li class="nav-item active">
            <button class="btn active status" href="#">
              All
            </button>
          </li>
          <li class="nav-item">
            <a class="btn" href="#">
              Overdue
            </a>
          </li>
        </ul>

        <hr/>
        
        <div className="table-penitipan">
          <TableTransaksiAdmin />
        </div>
      </div>
    </div>
  )
}

export default TransaksiAdmin
