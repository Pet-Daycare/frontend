import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';

import LandingPage from './pages/LandingPage';
import DashboardUser from './pages/DashboardUser'
import BookReservation from './pages/BookReservation';
import TopUpWallet from './pages/TopUpWallet'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ChangeDate from './pages/ChangeDate';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="dashboard" element={<DashboardUser/>} />
          <Route path="book-reservation" element={<BookReservation/>} />
          <Route path="topup" element={<TopUpWallet/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="edit" element={<ChangeDate/>} />

          {/* TAMBAHIN ROUTE DISINI YA */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
