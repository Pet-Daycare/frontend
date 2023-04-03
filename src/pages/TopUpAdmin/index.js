import React from "react";
import NavigationAdmin from "../../components/NavigationAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
import TableTopupAdmin from "../../components/TableTopupAdmin";

function TopUpAdmin() {
  return (
    <div className="row">
      <div className="col-3">
        <NavigationAdmin activeSelect="TOPUP" />
      </div>
      <div className="col-9 main-dash-admin">
        <HeaderAdmin />

        <h3 className="title-admin">Top Up</h3>
        <hr />

        <TableTopupAdmin />
      </div>
    </div>
  );
}

export default TopUpAdmin;
