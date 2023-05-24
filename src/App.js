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
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ChangeDate from './pages/ChangeDate';
import Payment from './pages/Payment';

import PrivateRoutesAdmin from './routes/PrivateRoutesAdmin';
import PrivateRoutesCustomer from './routes/PrivateRoutesCustomer';
import TopUpHistoryCustomer from './pages/TopUpHistoryCustomer';
import TransaksiCustomer from './pages/TransaksiCustomer';
import CouponFrontend from './pages/Coupon';
import VoucherFrontend from './pages/Voucher';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />

          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
         
          <Route element = {<PrivateRoutesCustomer/>}>
            <Route path="dashboard" element={<DashboardUser/>} />
            <Route path="dashboard/book-reservation" element={<BookReservation/>} />
            <Route path="dashboard/topup" element={<TopUpWallet/>} />
            <Route path="dashboard/edit" element={<ChangeDate/>} />
            <Route path="dashboard/payment" element={<Payment/>} />
            <Route path="dashboard/transaksi" element={<TransaksiCustomer/>} />
            <Route path="dashboard/history-topup" element={<TopUpHistoryCustomer/>} />
            {/* <Route path="detail-transaction" element={<DetailTransactionCustomer/>} /> */}
          </Route>

          
          <Route element = {<PrivateRoutesAdmin/>}>
            <Route path="admin/"element={<DashboardAdmin/>} />
            <Route path="admin/daftar-penitipan"element={<DaftarPenitipanAdmin/>} />
            <Route path="admin/transaksi"element={<TransaksiAdmin/>} />
            <Route path="admin/top-up"element={<TopUpAdmin/>} />
            <Route path="admin/tambah-penitipan"element={<AddPenitipanByAdmin/>} />
            <Route path="admin/voucher"element={<VoucherFrontend/>} />
            <Route path="admin/coupon"element={<CouponFrontend/>} />
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
