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
import SolarPanels from "./pages/SolarPanels";
import Sitesurvey from "./pages/Sitesurvey";
import Custom from "./pages/Custom";
import Quotation from "./pages/Quotation";
import Installation from "./pages/installation";
import NetMetering from "./pages/Net";
import After from "./pages/After";
import SolarPanelProduct from "./pages/SolarPanelProduct";
import Checkout from "./pages/Checkout";

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
       <Route
  path="/about"
  element={
    <About
      token={token}
      logout={logout}
    />
  }
/>
        
        {/* Services */}
        <Route
  path="/services"
  element={
    <Services
      token={token}
      logout={logout}
    />
  }
/>
    
        {/* Learn */}
       <Route
  path="/learn"
  element={
    <Learn
      token={token}
      logout={logout}
    />
  }
/>
    
             {/* Team */}
        <Route path="/team" element={<Team />} />

            Store
        <Route path="/store" element={<Store />} />

        <Route path="/solar-panels" element={<SolarPanels />} />

        <Route path="/site-survey" element={<Sitesurvey />} />

        <Route path="/custom" element={<Custom />} />

        <Route path="/quotation" element={<Quotation />} />

         <Route path="/installation" element={<Installation />} />

         <Route path="/netmetering" element={<NetMetering />} />

         <Route path="/after-support" element={<After />} />

          <Route path="/solar-panel-product" element={<SolarPanelProduct />}/>

          <Route path="/checkout" element={<Checkout />} />
          

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