import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          {/* TAMABAHIN ROUTE DISINI YA */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
