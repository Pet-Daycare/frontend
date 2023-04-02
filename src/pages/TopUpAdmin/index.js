import React from 'react'
import NavigationAdmin from '../../components/NavigationAdmin'
import HeaderAdmin from '../../components/HeaderAdmin'

function TopUpAdmin() {
  return (
    <div className="row">
      <div className="col-3">
        <NavigationAdmin activeSelect="TOPUP" />
      </div>
      <div className="col-9 main-dash-admin">
        <HeaderAdmin/>
      </div>
    </div>
  )
}

export default TopUpAdmin
