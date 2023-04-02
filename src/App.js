import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';

import LandingPage from './pages/LandingPage';
import DashboardUser from './pages/DashboardUser'
import BookReservation from './pages/BookReservation';
import TopUpWallet from './pages/TopUpWallet'
import DetailTransactionCustomer from './pages/DetailTransactionCustomer';
import DashboardAdmin from './pages/Dashboard-Admin';
import DaftarPenitipanAdmin from './pages/PenitipanAdmin';
import TransaksiAdmin from './pages/TransaksiAdmin';
import TopUpAdmin from './pages/TopUpAdmin';
import AddPenitipanByAdmin from './pages/AddPenitipanByAdmin';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="dashboard" element={<DashboardUser/>} />
          <Route path="book-reservation" element={<BookReservation/>} />
          <Route path="topup" element={<TopUpWallet/>} />

          {/* TAMABAHIN ROUTE DISINI YA */}
          <Route path="detail-transaction" element={<DetailTransactionCustomer/>} />
          <Route path="admin/"element={<DashboardAdmin/>} />
          <Route path="admin/daftar-penitipan"element={<DaftarPenitipanAdmin/>} />
          <Route path="admin/transaksi"element={<TransaksiAdmin/>} />
          <Route path="admin/top-up"element={<TopUpAdmin/>} />
          <Route path="admin/tambah-penitipan"element={<AddPenitipanByAdmin/>} />


        </Routes>
      </BrowserRouter>
  );
}

export default App;
