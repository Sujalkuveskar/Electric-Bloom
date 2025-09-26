import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Hero";
import Lineup from "./components/Lineup";
import Tickets from "./components/Tickets";



import "./CSS/ElectricBloom.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
  
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      )}
   


export default App;
