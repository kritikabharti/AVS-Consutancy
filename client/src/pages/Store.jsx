import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

 <Navbar />

const styles = {
  container: {
    minHeight: "100vh",
    padding: "50px",
    background: "#f4f8fb",
  },

  heading: {
    textAlign: "center",
    fontSize: "3rem",
    color: "#0a3d62",
    marginBottom: "15px",
  },

  subHeading: {
    textAlign: "center",
    color: "#666",
    fontSize: "1.1rem",
    marginBottom: "45px",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  card: {
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    textAlign: "center",
    paddingBottom: "25px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block",
  },

  productName: {
    fontSize: "1.25rem",
    color: "#222",
    margin: "18px 15px 8px",
  },

  description: {
    color: "#777",
    fontSize: "0.95rem",
    minHeight: "40px",
    padding: "0 15px",
    marginBottom: "10px",
  },

  price: {
    color: "#28a745",
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "18px",
  },

  button: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "30px",
    background: "#ff9800",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },

  loading: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#555",
    padding: "50px",
  },

  error: {
    textAlign: "center",
    color: "#dc3545",
    padding: "30px",
    fontSize: "1.1rem",
  },

  empty: {
    textAlign: "center",
    color: "#777",
    padding: "60px 20px",
    fontSize: "1.1rem",
  },

  contactSection: {
    marginTop: "80px",
    background: "#0a3d62",
    color: "#fff",
    padding: "45px 20px",
    textAlign: "center",
  },

  contactTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
  },

  contactText: {
    fontSize: "1.05rem",
    margin: "8px 0",
  },
};

function Store() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==============================
  // FETCH PRODUCTS FROM DATABASE
  // ==============================
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/products/public");

        // Supports different common backend response formats
        const data = response.data;

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Failed to load products:", err);

        setError(
          err.response?.data?.message ||
            "Unable to load products. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ==============================
  // PRODUCT DETAILS
  // ==============================
  const handleViewDetails = (product) => {
    // Use MongoDB _id if available
    if (product._id) {
      navigate(`/product/${product._id}`);
      return;
    }

    // Fallback if backend uses id
    if (product.id) {
      navigate(`/product/${product.id}`);
      return;
    }

    console.error("Product ID not found:", product);
  };

  return (
    <div style={styles.container}>
      {/* ================= HEADER ================= */}
      <h1 style={styles.heading}>Solar Store</h1>

      <p style={styles.subHeading}>
        Explore our latest solar products
      </p>

      {/* ================= PRODUCTS ================= */}

      {loading && (
        <div style={styles.loading}>
          Loading products...
        </div>
      )}

      {error && !loading && (
        <div style={styles.error}>
          {error}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div style={styles.empty}>
          <h3>No products available</h3>
          <p>
            Products added by the administrator will appear here.
          </p>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div style={styles.productGrid}>
          {products.map((product) => (
            <div
              key={product._id || product.id}
              style={styles.card}
            >
              {/* PRODUCT IMAGE */}
              <img
                src={
                  product.image ||
                  product.imageUrl ||
                  "https://via.placeholder.com/500x300?text=Solar+Product"
                }
                alt={product.name || "Solar Product"}
                style={styles.image}
              />

              {/* PRODUCT NAME */}
              <h3 style={styles.productName}>
                {product.name}
              </h3>

              {/* DESCRIPTION */}
              {product.description && (
                <p style={styles.description}>
                  {product.description.length > 80
                    ? `${product.description.substring(0, 80)}...`
                    : product.description}
                </p>
              )}

              {/* PRICE */}
              <p style={styles.price}>
                ₹
                {Number(product.price || 0).toLocaleString("en-IN")}
              </p>

              {/* BUTTON */}
              <button
                style={styles.button}
                onClick={() => handleViewDetails(product)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ================= CONTACT US ================= */}

      <section style={styles.contactSection}>
        <h2 style={styles.contactTitle}>
          Contact Us
        </h2>

        <p style={styles.contactText}>
          📞 Phone: +91 98765 43210
        </p>

        <p style={styles.contactText}>
          ✉️ Email: support@solarstore.com
        </p>

        <p style={styles.contactText}>
          We are happy to help you with your solar product requirements.
        </p>
      </section>
    </div>
  );
}

export default Store;