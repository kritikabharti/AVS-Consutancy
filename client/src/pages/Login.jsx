import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backgroundImageFile from "../assets/ig.jpg";
import { toast } from "react-toastify";

export default function Login({ setToken }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const endpoint = isRegistering ? "register" : "login";

    // IMPORTANT:
    // Backend expects "fullName", NOT "name"
    const payload = isRegistering
      ? {
          fullName: fullname.trim(),
          name: fullname.trim(),
          email: email.trim().toLowerCase(),
          password,
        }
      : {
          email: email.trim().toLowerCase(),
          password,
        };

    // Frontend validation
    if (isRegistering && !fullname.trim()) {
      toast.error("Full name is required");
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      setLoading(false);
      return;
    }

    if (!password) {
      toast.error("Password is required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/user/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong"
        );
      }

      // =========================
      // REGISTRATION SUCCESS
      // =========================
      if (isRegistering) {
        toast.success(
          data.message ||
            "Registration successful. Please check your email and verify your account."
        );

        setIsRegistering(false);
        setFullname("");
        setEmail("");
        setPassword("");
      }

      // =========================
      // LOGIN SUCCESS
      // =========================
      else {
        if (!data.token) {
          throw new Error("Login token was not received");
        }

        const userData = data.user || {
          role: data.role || "user",
          email: email.trim().toLowerCase(),
        };

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("userRole", userData.role || "user");
        localStorage.setItem("role", userData.role || "user");
        localStorage.setItem(
          "isAdmin",
          String(userData.role === "admin")
        );

        if (setToken) {
          setToken(data.token);
        }

        toast.success(data.message || "Login successful");

        if (userData.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Authentication error:", err);

      toast.error(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsRegistering(!isRegistering);

    setFullname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <form
        onSubmit={handleSubmit}
        style={styles.card}
        autoComplete="off"
      >
        {/* Hidden fields to reduce browser autofill */}
        <input
          type="text"
          name="prevent-autofill-username"
          autoComplete="off"
          style={styles.hiddenInput}
          tabIndex="-1"
        />

        <input
          type="password"
          name="prevent-autofill-password"
          autoComplete="new-password"
          style={styles.hiddenInput}
          tabIndex="-1"
        />

        {/* TITLE */}
        <h2 style={styles.title}>AVS SOLAR</h2>

        <p style={styles.subtitle}>
          {isRegistering
            ? "Create an Account"
            : "Sign In"}
        </p>

        {/* FULL NAME */}
        {isRegistering && (
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) =>
              setFullname(e.target.value)
            }
            autoComplete="name"
            required
            className="login-input"
            style={styles.input}
          />
        )}

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          autoComplete="email"
          required
          className="login-input"
          style={styles.input}
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          autoComplete={
            isRegistering
              ? "new-password"
              : "current-password"
          }
          required
          minLength={6}
          className="login-input"
          style={styles.input}
        />

        {/* FORGOT PASSWORD */}
        {!isRegistering && (
          <div style={styles.forgotContainer}>
            <Link
              to="/forgot-password"
              style={styles.forgotLink}
            >
              Forgot Password?
            </Link>
          </div>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
            cursor: loading
              ? "not-allowed"
              : "pointer",
          }}
          disabled={loading}
        >
          {loading
            ? isRegistering
              ? "Creating Account..."
              : "Logging In..."
            : isRegistering
            ? "Sign Up"
            : "Log In"}
        </button>

        {/* SWITCH LOGIN / REGISTER */}
        <p style={styles.toggleText}>
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            style={styles.toggleLink}
            onClick={switchMode}
          >
            {isRegistering
              ? "Log In"
              : "Register Here"}
          </span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundImage: `url(${backgroundImageFile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    backgroundColor: "#0a192f",

    fontFamily: "Arial, sans-serif",

    padding: "20px",
    boxSizing: "border-box",
  },

  card: {
    background: "rgba(5, 20, 40, 0.45)",

    padding: "40px",

    borderRadius: "14px",

    border: "1px solid rgba(255,255,255,0.25)",

    boxShadow:
      "0 8px 35px rgba(255,255,255,0.25)",

    backdropFilter: "blur(8px)",

    WebkitBackdropFilter: "blur(8px)",

    width: "100%",
    maxWidth: "380px",

    textAlign: "center",

    boxSizing: "border-box",
  },

  title: {
    color: "white",
    margin: "0 0 5px 0",
    fontSize: "30px",
    fontWeight: "700",
  },

  subtitle: {
    color: "white",
    marginBottom: "25px",
    fontSize: "18px",
  },

  input: {
    width: "100%",
    padding: "13px 15px",
    marginBottom: "15px",

    borderRadius: "7px",

    border: "1px solid rgba(255,255,255,0.5)",

    boxSizing: "border-box",

    color: "white",

    backgroundColor:
      "rgba(255,255,255,0.10)",

    outline: "none",

    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "13px",

    backgroundColor: "#0052cc",

    color: "#fff",

    border: "none",

    borderRadius: "7px",

    fontWeight: "bold",

    fontSize: "16px",

    marginBottom: "15px",

    transition: "0.2s",
  },

  forgotContainer: {
    textAlign: "right",
    marginBottom: "15px",
  },

  forgotLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
  },

  toggleText: {
    fontSize: "14px",
    color: "yellow",
    marginTop: "10px",
  },

  toggleLink: {
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },

  hiddenInput: {
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    height: 0,
    width: 0,
  },
};