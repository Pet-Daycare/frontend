import React from 'react'
import NavigationAdmin from '../../components/NavigationAdmin'
import HeaderAdmin from '../../components/HeaderAdmin'

function TransaksiAdmin() {
  return (
    <div className="row">
      <div className="col-3">
        <NavigationAdmin activeSelect="TRANSAKSI" />
      </div>
      <div className="col-9 main-dash-admin">
        <HeaderAdmin/>
      </div>
    </div>
  )
}

export default TransaksiAdmin
