import React from "react";
import NavigationAdmin from "../../components/NavigationAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
import "./index.scss";
import TablePenitipanAdmin from "../../components/TablePenitipanAdmin";

function DaftarPenitipanAdmin() {
  return (
    <div className="row">
      <div className="col-3">
        <NavigationAdmin activeSelect="PENITIPAN" />
      </div>
      <div className="col-9 main-dash-admin">
        <HeaderAdmin />

        <h3 className="title-admin">Penitipan</h3>

        <ul class="nav nav-pills">
          <li class="nav-item active">
            <button class="btn active status" href="#">
              All
            </button>
          </li>
          {/* <li class="nav-item">
            <a class="btn" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="btn" href="#">
              Overdue
            </a>
          </li> */}
        </ul>

        <hr />
        <div className="table-penitipan">
          <TablePenitipanAdmin />
        </div>
      </div>
    </div>
  );
}

export default DaftarPenitipanAdmin;
