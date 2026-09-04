import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoFile from "../assets/logo.png";

export default function Navbar({ token, logout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMounts, setShowMounts] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  /*
  ====================================================
  AUTHENTICATION
  ====================================================
  */

  const storedToken = token || localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(!!storedToken);

  /*
  ====================================================
  CHECK ADMIN STATUS
  ====================================================
  */

  const checkAdminStatus = () => {
    try {
      const currentToken = token || localStorage.getItem("token");

      const storedUser =
        JSON.parse(localStorage.getItem("user")) || null;

      const storedRole =
        localStorage.getItem("role") ||
        localStorage.getItem("userRole");

      const storedIsAdmin =
        localStorage.getItem("isAdmin") === "true";

      let tokenUser = null;

      /*
      Decode JWT payload safely
      */

      if (currentToken) {
        try {
          const parts = currentToken.split(".");

          if (parts.length !== 3) {
            throw new Error("Malformed JWT");
          }

          tokenUser = JSON.parse(
            atob(
              parts[1]
                .replace(/-/g, "+")
                .replace(/_/g, "/")
            )
          );
        } catch (error) {
          console.warn("Could not decode JWT:", error);
          localStorage.removeItem("token");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
          localStorage.removeItem("userRole");
          localStorage.removeItem("role");
          localStorage.removeItem("isAdmin");
          setIsAdmin(false);
          setIsLoggedIn(false);
          return;
        }
      }

      /*
      Admin if ANY trusted frontend auth source
      says role = admin.
      */

      const adminDetected =
        storedUser?.role === "admin" ||
        storedRole === "admin" ||
        tokenUser?.role === "admin" ||
        storedIsAdmin;

      setIsAdmin(adminDetected);
      setIsLoggedIn(!!currentToken);

      console.log("NAVBAR AUTH:", {
        tokenExists: !!currentToken,
        storedUser,
        tokenUser,
        storedRole,
        storedIsAdmin,
        isAdmin: adminDetected,
      });
    } catch (error) {
      console.error(
        "Navbar authentication check error:",
        error
      );

      setIsAdmin(false);
      setIsLoggedIn(false);
    }
  };

  /*
  ====================================================
  RUN AUTH CHECK
  ====================================================
  */

  useEffect(() => {
    checkAdminStatus();
  }, [token, location.pathname]);

  /*
  ====================================================
  HANDLE STORAGE CHANGES
  ====================================================
  */

  useEffect(() => {
    const handleStorageChange = () => {
      checkAdminStatus();
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    /*
    Custom event for same-tab login/logout
    */

    window.addEventListener(
      "authChanged",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );

      window.removeEventListener(
        "authChanged",
        handleStorageChange
      );
    };
  }, [token]);

  /*
  ====================================================
  ACTIVE ROUTE
  ====================================================
  */

  const isActive = (path) => {
    return location.pathname === path;
  };

  /*
  ====================================================
  NAVIGATION
  ====================================================
  */

  const handleNavigate = (path) => {
    navigate(path);

    setMenuOpen(false);
    setShowMounts(false);
  };

  /*
  ====================================================
  LOGOUT
  ====================================================
  */

  const handleLogout = () => {
    if (logout) {
      logout();
    }

    /*
    Clear authentication data
    */

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("isAdmin");

    setIsAdmin(false);
    setIsLoggedIn(false);

    setMenuOpen(false);
    setShowMounts(false);

    /*
    Tell other components that auth changed
    */

    window.dispatchEvent(
      new Event("authChanged")
    );

    navigate("/login");
  };

  /*
  ====================================================
  MOBILE MENU
  ====================================================
  */

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setShowMounts(false);
  };

  /*
  ====================================================
  RENDER
  ====================================================
  */

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav className="avs-navbar">

        {/* ==================================================
            LOGO
        ================================================== */}

        <div
          className="avs-logo"
          onClick={() => handleNavigate("/")}
        >
          <img
            src={logoFile}
            alt="AVS Solar Consultancy"
            className="avs-logo-image"
          />

          <span className="avs-logo-text">
            AVS SOLAR CONSULTANCY
          </span>
        </div>

        {/* ==================================================
            DESKTOP MENU
        ================================================== */}

        <div className="avs-desktop-menu">

          {/* HOME */}

          <motion.button
            onClick={() => handleNavigate("/")}
            className={`avs-nav-link ${
              isActive("/") ? "active" : ""
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            HOME
          </motion.button>

          {/* ABOUT */}

          <motion.button
            onClick={() => handleNavigate("/about")}
            className={`avs-nav-link ${
              isActive("/about") ? "active" : ""
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.button>

          {/* SERVICES */}

          <motion.button
            onClick={() => handleNavigate("/services")}
            className={`avs-nav-link ${
              isActive("/services") ? "active" : ""
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Services
          </motion.button>

          {/* ==================================================
              MOUNTS DROPDOWN
          ================================================== */}

          <div
            className="avs-dropdown"
            onMouseEnter={() =>
              setShowMounts(true)
            }
            onMouseLeave={() =>
              setShowMounts(false)
            }
          >
            <button
              className={`avs-nav-link ${
                isActive("/mounting") ||
                isActive("/monitoring")
                  ? "active"
                  : ""
              }`}
            >
              Mounts
              <span className="arrow">
                ▼
              </span>
            </button>

            <AnimatePresence>
              {showMounts && (
                <motion.div
                  className="avs-dropdown-menu"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <button
                    className="avs-dropdown-item"
                    onClick={() =>
                      handleNavigate(
                        "/mounting"
                      )
                    }
                  >
                    Mounting
                  </button>

                  <button
                    className="avs-dropdown-item"
                    onClick={() =>
                      handleNavigate(
                        "/monitoring"
                      )
                    }
                  >
                    Monitoring
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* OUR TEAM */}

          <motion.button
            onClick={() =>
              handleNavigate("/team")
            }
            className={`avs-nav-link ${
              isActive("/team") ? "active" : ""
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Team
          </motion.button>

          {/* STORE */}

          <motion.button
            onClick={() =>
              handleNavigate("/store")
            }
            className={`avs-nav-link ${
              isActive("/store") ? "active" : ""
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Store
          </motion.button>


           <motion.button
            onClick={() =>
              handleNavigate("/contact")
            }
            className={`avs-nav-link ${
              isActive("/contact") ? "active" : ""
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>

          {/* ==================================================
              ADMIN BUTTON
          ================================================== */}

          {isAdmin && (
            <motion.button
              onClick={() =>
                handleNavigate(
                  "/admin/dashboard"
                )
              }
              className={`avs-nav-link admin-nav-link ${
                isActive(
                  "/admin/dashboard"
                )
                  ? "active"
                  : ""
              }`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              Admin
            </motion.button>
          )}
        </div>

        {/* ==================================================
            DESKTOP AUTH
        ================================================== */}

        <div className="avs-desktop-auth">

          {isLoggedIn ? (
            <button
              className="avs-auth-button"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <button
              className="avs-auth-button"
              onClick={() =>
                handleNavigate("/login")
              }
            >
              Log In
            </button>
          )}

        </div>

        {/* ==================================================
            MOBILE HAMBURGER
        ================================================== */}

        <button
          className={`avs-hamburger ${
            menuOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}

            <motion.div
              className="avs-mobile-overlay"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setMenuOpen(false)
              }
            />

            {/* Menu */}

            <motion.div
              className="avs-mobile-menu"
              initial={{
                opacity: 0,
                x: "100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >

              {/* ==================================================
                  MOBILE HEADER
              ================================================== */}

              <div className="avs-mobile-header">

                <div className="avs-mobile-brand">

                  <img
                    src={logoFile}
                    alt="AVS Solar"
                  />

                  <span>
                    AVS SOLAR
                  </span>

                </div>

                <button
                  className="avs-close-button"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  aria-label="Close menu"
                >
                  ×
                </button>

              </div>

              {/* HOME */}

              <button
                className={`avs-mobile-link ${
                  isActive("/")
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigate("/")
                }
              >
                <span>HOME</span>
              </button>

              {/* ABOUT */}

              <button
                className={`avs-mobile-link ${
                  isActive("/about")
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigate("/about")
                }
              >
                <span>About</span>
              </button>

              {/* SERVICES */}

              <button
                className={`avs-mobile-link ${
                  isActive("/services")
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigate(
                    "/services"
                  )
                }
              >
                <span>Services</span>
              </button>

              {/* ==================================================
                  MOBILE MOUNTS
              ================================================== */}

              <div className="avs-mobile-dropdown">

                <button
                  className={`avs-mobile-link ${
                    isActive("/mounting") ||
                    isActive("/monitoring")
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setShowMounts(
                      (prev) => !prev
                    )
                  }
                >
                  <span>
                    Mounts
                  </span>

                  <span
                    className={`mobile-arrow ${
                      showMounts
                        ? "rotate"
                        : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {showMounts && (
                    <motion.div
                      className="avs-mobile-submenu"
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                    >
                      <button
                        className="avs-mobile-sub-link"
                        onClick={() =>
                          handleNavigate(
                            "/mounting"
                          )
                        }
                      >
                        Mounting
                      </button>

                      <button
                        className="avs-mobile-sub-link"
                        onClick={() =>
                          handleNavigate(
                            "/monitoring"
                          )
                        }
                      >
                        Monitoring
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* TEAM */}

              <button
                className={`avs-mobile-link ${
                  isActive("/team")
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigate("/team")
                }
              >
                <span>
                  Our Team
                </span>
              </button>

              {/* STORE */}

              <button
                className={`avs-mobile-link ${
                  isActive("/store")
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigate("/store")
                }
              >
                <span>
                  Store
                </span>
              </button>

              {/* ==================================================
                  MOBILE ADMIN
              ================================================== */}

              {isAdmin && (
                <button
                  className={`avs-mobile-link admin-mobile-link ${
                    isActive(
                      "/admin/dashboard"
                    )
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavigate(
                      "/admin/dashboard"
                    )
                  }
                >
                  <span>
                    Admin
                  </span>

                  <span className="admin-badge">
                    ADMIN
                  </span>
                </button>
              )}

              {/* ==================================================
                  MOBILE AUTH
              ================================================== */}

              <div className="avs-mobile-auth">

                {isLoggedIn ? (
                  <button
                    className="avs-mobile-auth-button"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="avs-mobile-auth-button"
                    onClick={() =>
                      handleNavigate(
                        "/login"
                      )
                    }
                  >
                    Log In
                  </button>
                )}

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ==================================================
          CSS
      ================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* ==================================================
           DESKTOP NAVBAR
        ================================================== */

        .avs-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 50px;

          background: rgba(0, 0, 0, 0.45);

          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);

          border-bottom:
            1px solid rgba(
              255,
              255,
              255,
              0.08
            );

          z-index: 9999;
        }

        /* ==================================================
           LOGO
        ================================================== */

        .avs-logo {
          display: flex;
          align-items: center;

          cursor: pointer;

          flex-shrink: 0;
        }

        .avs-logo-image {
          width: auto;
          height: 58px;

          object-fit: contain;
        }

        .avs-logo-text {
          color: #fff;

          font-weight: 700;
          font-size: 22px;

          letter-spacing: 1.5px;

          margin-left: 12px;

          white-space: nowrap;
        }

        /* ==================================================
           DESKTOP MENU
        ================================================== */

        .avs-desktop-menu {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 28px;
        }

        .avs-nav-link {
          background: transparent;

          border: none;
          outline: none;

          color: #fff;

          cursor: pointer;

          font-size: 16px;
          font-weight: 600;

          padding: 8px 0;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .avs-nav-link:hover {
          color: #FFD54F;
        }

        .avs-nav-link.active {
          color: #FFD54F;
        }

        /* ==================================================
           ADMIN DESKTOP
        ================================================== */

        .admin-nav-link {
          color: #FFD54F;
          font-weight: 700;
        }

        .admin-nav-link:hover {
          color: #fff;
        }

        /* ==================================================
           DROPDOWN
        ================================================== */

        .avs-dropdown {
          position: relative;
        }

        .avs-dropdown-menu {
          position: absolute;

          top: 35px;
          left: 0;

          min-width: 190px;

          background:
            rgba(15, 15, 15, 0.97);

          border-radius: 10px;

          overflow: hidden;

          box-shadow:
            0 15px 40px
            rgba(0, 0, 0, 0.4);

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          z-index: 10000;
        }

        .avs-dropdown-item {
          width: 100%;

          padding: 14px 18px;

          border: none;

          background: transparent;

          color: #fff;

          cursor: pointer;

          text-align: left;

          font-size: 15px;

          transition: all 0.25s ease;
        }

        .avs-dropdown-item:hover {
          background:
            rgba(
              255,
              213,
              79,
              0.12
            );

          color: #FFD54F;
        }

        .arrow {
          font-size: 10px;
          margin-left: 4px;
        }

        /* ==================================================
           AUTH
        ================================================== */

        .avs-desktop-auth {
          flex-shrink: 0;
        }

        .avs-auth-button {
          background: transparent;

          color: #fff;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.7
            );

          padding: 10px 18px;

          border-radius: 20px;

          font-weight: 600;
          font-size: 16px;

          cursor: pointer;

          transition: all 0.3s ease;

          white-space: nowrap;
        }

        .avs-auth-button:hover {
          background: #FFD54F;

          border-color: #FFD54F;

          color: #111;
        }

        /* ==================================================
           HAMBURGER
        ================================================== */

        .avs-hamburger {
          display: none;

          width: 44px;
          height: 44px;

          padding: 8px;

          border: none;

          background: transparent;

          cursor: pointer;

          flex-direction: column;

          justify-content: center;
          align-items: center;

          gap: 5px;

          z-index: 10001;
        }

        .avs-hamburger span {
          display: block;

          width: 26px;
          height: 3px;

          background: #fff;

          border-radius: 5px;

          transition: all 0.3s ease;
        }

        .avs-hamburger.open
        span:nth-child(1) {
          transform:
            translateY(8px)
            rotate(45deg);
        }

        .avs-hamburger.open
        span:nth-child(2) {
          opacity: 0;
        }

        .avs-hamburger.open
        span:nth-child(3) {
          transform:
            translateY(-8px)
            rotate(-45deg);
        }

        /* ==================================================
           MOBILE OVERLAY
        ================================================== */

        .avs-mobile-overlay {
          position: fixed;

          inset: 0;

          background:
            rgba(0, 0, 0, 0.55);

          z-index: 9997;
        }

        /* ==================================================
           MOBILE MENU
        ================================================== */

        .avs-mobile-menu {
          position: fixed;

          top: 0;
          right: 0;

          width:
            min(320px, 85vw);

          height: 100vh;

          background:
            linear-gradient(
              180deg,
              #111 0%,
              #171717 100%
            );

          box-shadow:
            -10px 0 40px
            rgba(0, 0, 0, 0.45);

          z-index: 9998;

          overflow-y: auto;

          padding-bottom: 30px;
        }

        /* ==================================================
           MOBILE HEADER
        ================================================== */

        .avs-mobile-header {
          height: 80px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          padding: 0 20px;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.1
            );
        }

        .avs-mobile-brand {
          display: flex;

          align-items: center;

          color: #fff;

          font-size: 15px;

          font-weight: 700;

          letter-spacing: 1px;
        }

        .avs-mobile-brand img {
          width: 42px;
          height: 42px;

          object-fit: contain;

          margin-right: 8px;
        }

        .avs-close-button {
          border: none;

          background: transparent;

          color: #fff;

          font-size: 34px;

          line-height: 1;

          cursor: pointer;

          padding: 0 5px;
        }

        /* ==================================================
           MOBILE LINKS
        ================================================== */

        .avs-mobile-link {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          padding: 18px 25px;

          border: none;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.06
            );

          background: transparent;

          color: #fff;

          font-size: 17px;

          font-weight: 600;

          text-align: left;

          cursor: pointer;

          transition: all 0.25s ease;
        }

        .avs-mobile-link:hover {
          background:
            rgba(
              255,
              255,
              255,
              0.06
            );

          color: #FFD54F;
        }

        .avs-mobile-link.active {
          color: #FFD54F;
        }

        /* ==================================================
           MOBILE ADMIN
        ================================================== */

        .admin-mobile-link {
          color: #FFD54F;

          font-weight: 700;

          background:
            rgba(
              255,
              213,
              79,
              0.05
            );
        }

        .admin-mobile-link:hover {
          background:
            rgba(
              255,
              213,
              79,
              0.12
            );
        }

        .admin-badge {
          font-size: 10px;

          padding: 4px 8px;

          border-radius: 10px;

          background: #FFD54F;

          color: #111;

          font-weight: 800;
        }

        /* ==================================================
           MOBILE SUBMENU
        ================================================== */

        .avs-mobile-submenu {
          overflow: hidden;

          background:
            rgba(
              255,
              255,
              255,
              0.04
            );
        }

        .avs-mobile-sub-link {
          width: 100%;

          padding: 15px 45px;

          border: none;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.05
            );

          background: transparent;

          color: #ddd;

          font-size: 15px;

          text-align: left;

          cursor: pointer;

          transition: all 0.25s ease;
        }

        .avs-mobile-sub-link:hover {
          color: #FFD54F;

          background:
            rgba(
              255,
              213,
              79,
              0.08
            );
        }

        .mobile-arrow {
          font-size: 11px;

          transition:
            transform 0.25s ease;
        }

        .mobile-arrow.rotate {
          transform:
            rotate(180deg);
        }

        /* ==================================================
           MOBILE AUTH
        ================================================== */

        .avs-mobile-auth {
          padding: 25px;
        }

        .avs-mobile-auth-button {
          width: 100%;

          padding: 13px 20px;

          border-radius: 25px;

          border:
            1px solid #FFD54F;

          background: #FFD54F;

          color: #111;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .avs-mobile-auth-button:hover {
          background: transparent;

          color: #FFD54F;
        }

        /* ==================================================
           TABLET
        ================================================== */

        @media (max-width: 1100px) {

          .avs-navbar {
            padding: 0 25px;
          }

          .avs-logo-text {
            font-size: 17px;
          }

          .avs-logo-image {
            height: 52px;
          }

          .avs-desktop-menu {
            gap: 16px;
          }

          .avs-nav-link {
            font-size: 14px;
          }

          .avs-auth-button {
            font-size: 14px;

            padding:
              9px 15px;
          }
        }

        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 768px) {

          .avs-navbar {
            height: 70px;

            padding: 0 15px;

            background:
              rgba(
                0,
                0,
                0,
                0.72
              );
          }

          .avs-logo-image {
            height: 48px;
          }

          .avs-logo-text {
            display: none;
          }

          .avs-desktop-menu {
            display: none;
          }

          .avs-desktop-auth {
            display: none;
          }

          .avs-hamburger {
            display: flex;
          }
        }

        /* ==================================================
           SMALL MOBILE
        ================================================== */

        @media (max-width: 400px) {

          .avs-navbar {
            padding: 0 10px;
          }

          .avs-logo-image {
            height: 44px;
          }

          .avs-mobile-menu {
            width: 88vw;
          }
        }

      `}</style>
    </>
  );
}