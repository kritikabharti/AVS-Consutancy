import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Monitoring({ token, logout }) {
  const navigate = useNavigate();
  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <h1>Monitoring</h1>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>

      <main>
        <h2>System Monitoring</h2>
        <p>Monitor your solar system performance here.</p>
      </main>

      <Footer />
    </div>
  );
}

export default Monitoring;
