import React, { useState } from "react";
import "./index.scss";

import NavigationAdmin from "../../components/NavigationAdmin";
import ImageHeadLine from "../../assets/image-people.svg";
import Barchart from "../../assets/bar-chart-2.svg";
import CheckCircle from "../../assets/check-circle.svg";
import HeaderAdmin from "../../components/HeaderAdmin";
import TablePengambilanAdmin from "../../components/TablePengambilanAdmin";

function DashboardAdmin() {
  return (
    <div className="row">
      <div className="col-3">
        <NavigationAdmin activeSelect="DASHBOARD" />
      </div>
      <div className="col-9 main-dash-admin">
        <HeaderAdmin />

        <div className="row welcome-admin-tag">
          <div className="col-6 tag-decs">
            <h3>Hi Joey</h3>
            <p>
              We're excited to have you here as an administrator of our pet care
              services.
            </p>
          </div>
          <img className="col-6" src={ImageHeadLine} />
        </div>

        <div className="row info-panel ">
          <div className="col-6 ">
            <div className="orange-col d-flex">
              <img src={Barchart} />
              <div>
                <h3>100</h3>
                <p>Penitipan Aktif</p>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="yellow-col d-flex">
              <img src={CheckCircle} />
              <div>
                <h3>1</h3>
                <p>Transaksi Selesai</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pengambilan">
          <h3 className="title-admin title-pengambilan">
            Pengambilan hari ini
          </h3>
          <hr />
        </div>

        <TablePengambilanAdmin />
      </div>
    </div>
  );
}

export default DashboardAdmin;
