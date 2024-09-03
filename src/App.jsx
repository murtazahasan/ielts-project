import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components/index.js";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />

      <div className="fixed top-1/2 right-0 mt-44 sm:mt-28">
        <a href="https://wa.me/+923172835015" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={40} color="#FFFFFF" className="bg-green-500 rounded-full p-1" />
        </a>
      </div>

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
