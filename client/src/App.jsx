import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Services from "./pages/Services";
import Learn from "./pages/Learn";
import Team from "./pages/Team";
import Store from "./pages/Store";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        {/* Login */}
        <Route
          path="/login"
          element={<Login setToken={setToken} />}
        />
        {/* About */}
        <Route path="/about" element={<About />} />
        
        {/* Services */}
        <Route path="/services" element={<Services />} />

        {/* Learn */}
        <Route path="/learn" element={<Learn />} />
    
             {/* Team */}
        <Route path="/team" element={<Team />} />

            {/* Store */}
        <Route path="/store" element={<Store />} />

        {/* Forgot Password */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Reset Password */}
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              token={token}
              logout={logout}
            />
            
          }
        />


        {/* Redirect Unknown Routes */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;