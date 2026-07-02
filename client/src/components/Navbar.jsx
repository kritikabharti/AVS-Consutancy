import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logoFile from "../assets/logo.png";


export default function Navbar({ token, logout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMounts, setShowMounts] = useState(false);

  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      {/* Logo */}

      <div
        style={styles.logo}
        onClick={() => navigate("/")}
      >
        <img
          src={logoFile}
          alt="AVS SOLAR"
          style={styles.logoImage}
        />

        <span style={styles.logoText}>
          AVS SOLAR CONSULTANCY
        </span>
      </div>

      {/* Menu */}

      <div style={styles.navLinks}>
        <motion.button
          onClick={() => navigate("/")}
          style={{
            ...styles.link,
            ...(isActive("/") ? styles.active : {}),
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          HOME
        </motion.button>

        <motion.button
          onClick={() => navigate("/about")}
          style={{
            ...styles.link,
            ...(isActive("/about") ? styles.active : {}),
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.button>

        <motion.button
          onClick={() => navigate("/services")}
          style={{
            ...styles.link,
            ...(isActive("/services") ? styles.active : {}),
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Services
        </motion.button>

        {/* Dropdown */}

        <div
          style={styles.dropdown}
          onMouseEnter={() => setShowMounts(true)}
          onMouseLeave={() => setShowMounts(false)}
        >
          <button style={styles.link}>
            Mounts ▼
          </button>

          {showMounts && (
            <motion.div
              style={styles.dropdownMenu}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button
                style={styles.dropdownItem}
                onClick={() => navigate("/mounting")}
              >
                Mounting
              </button>

              <button
                style={styles.dropdownItem}
                onClick={() => navigate("/monitoring")}
              >
                Monitoring
                
              </button>
            </motion.div>
          )}
        </div>

        <motion.button
          onClick={() => navigate("/team")}
          style={{
            ...styles.link,
            ...(isActive("/team") ? styles.active : {}),
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Our Team
        </motion.button>

        <motion.button
          onClick={() => navigate("/store")}
          style={{
            ...styles.link,
            ...(isActive("/store") ? styles.active : {}),
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Store
        </motion.button>
      </div>

      {/* Login */}

      {isLoggedIn ? (
        <button
          style={styles.authButton}
          onClick={handleLogout}
        >
          Log Out
        </button>
      ) : (
        <button
          style={styles.authButton}
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
      )}
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
    background: "rgba(0,0,0,.45)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    zIndex: 999,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  logoImage: {
    height: "58px",
  },

  logoText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "22px",
    letterSpacing: "1.5px",
    marginLeft: "12px",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },

  link: {
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 600,
    transition: ".3s",
  },

  active: {
    color: "#FFD54F",
  },

  dropdown: {
    position: "relative",
  },

  dropdownMenu: {
    position: "absolute",
    top: "20px",
    left: 0,
    background: "rgba(15,15,15,.95)",
    borderRadius: "10px",
    overflow: "hidden",
    minWidth: "180px",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  },

  dropdownItem: {
    width: "100%",
    padding: "14px",
    border: "none",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    textAlign: "left",
    transition: ".3s",
  },

  authButton: {
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.7)",
  padding: "10px 18px",
  borderRadius: "20px",
  fontWeight: 600,
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.3s ease",
},
};