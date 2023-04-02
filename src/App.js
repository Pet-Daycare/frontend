import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';

import LandingPage from './pages/LandingPage';
import DashboardUser from './pages/DashboardUser'
import BookReservation from './pages/BookReservation';
import TopUpWallet from './pages/TopUpWallet'
import DetailTransactionCustomer from './pages/DetailTransactionCustomer';

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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
