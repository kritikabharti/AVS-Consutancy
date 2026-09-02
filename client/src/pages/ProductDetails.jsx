import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

const placeholderImage =
  "https://via.placeholder.com/800x500?text=Solar+Product";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await api.get(`/products/public/${id}`);
        setProduct(response.data?.product || response.data);
      } catch (requestError) {
        setError(
          requestError.response?.data?.message ||
            "This product could not be loaded."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <div style={styles.message}>Loading product details...</div>;
  }

  if (error || !product) {
    return (
      <div style={styles.message}>
        <h2>{error || "Product not found"}</h2>
        <button style={styles.secondaryButton} onClick={() => navigate("/store")}>
          Back to Store
        </button>
      </div>
    );
  }

  const image = product.image || product.imageUrl || placeholderImage;
  const price = Number(product.price || 0).toLocaleString("en-IN");
  const discountPrice = product.discountPrice
    ? Number(product.discountPrice).toLocaleString("en-IN")
    : null;

  return (
    <>
      <Navbar />
      <main style={styles.page}>
        <button style={styles.backButton} onClick={() => navigate("/store")}>
          Back to Store
        </button>

        <section style={styles.productLayout}>
          <div style={styles.imagePanel}>
            <img src={image} alt={product.name} style={styles.image} />
          </div>

          <div style={styles.content}>
            <p style={styles.category}>{product.category}</p>
            <h1 style={styles.title}>{product.name}</h1>
            {product.brand && <p style={styles.brand}>Brand: {product.brand}</p>}
            {product.description && (
              <p style={styles.description}>{product.description}</p>
            )}

            <div style={styles.prices}>
              {discountPrice && <span style={styles.discountPrice}>₹{discountPrice}</span>}
              <span style={discountPrice ? styles.originalPrice : styles.price}>
                ₹{price}
              </span>
            </div>

            <p style={styles.stock}>
              {product.stock > 0 ? `${product.stock} available` : "Currently out of stock"}
            </p>

            {Array.isArray(product.specifications) && product.specifications.length > 0 && (
              <div style={styles.specifications}>
                <h2>Specifications</h2>
                <ul>
                  {product.specifications.map((specification, index) => (
                    <li key={`${specification.name || specification}-${index}`}>
                      {typeof specification === "object"
                        ? `${specification.name || "Specification"}: ${specification.value || "-"}`
                        : specification}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a href="tel:+919876543210" style={styles.primaryButton}>
              Contact Us
            </a>
          </div>
        </section>

        <section style={styles.contactSection}>
          <h2>Need help choosing the right solar product?</h2>
          <p>Call +91 98765 43210 or email support@solarstore.com</p>
          <a href="mailto:support@solarstore.com" style={styles.contactLink}>
            Send an Enquiry
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  page: { minHeight: "70vh", padding: "44px 6vw", background: "#f4f8fb" },
  backButton: { border: 0, background: "transparent", color: "#0a3d62", fontWeight: 700, cursor: "pointer", marginBottom: "24px", fontSize: "1rem" },
  productLayout: { maxWidth: "1150px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "48px", alignItems: "center", background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 12px 30px rgba(15, 23, 42, 0.1)" },
  imagePanel: { minHeight: "430px", background: "#e8f1f6" },
  image: { width: "100%", height: "100%", minHeight: "430px", objectFit: "cover", display: "block" },
  content: { padding: "36px 40px 36px 0" },
  category: { color: "#1d63a8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 },
  title: { color: "#0a3d62", fontSize: "clamp(2rem, 4vw, 3.4rem)", margin: "12px 0" },
  brand: { color: "#64748b", margin: "0 0 20px" },
  description: { color: "#475569", lineHeight: 1.7, fontSize: "1.05rem" },
  prices: { display: "flex", gap: "14px", alignItems: "baseline", margin: "26px 0 8px" },
  price: { color: "#159447", fontWeight: 800, fontSize: "1.8rem" },
  discountPrice: { color: "#159447", fontWeight: 800, fontSize: "1.8rem" },
  originalPrice: { color: "#94a3b8", textDecoration: "line-through", fontSize: "1.1rem" },
  stock: { color: "#475569", marginBottom: "28px" },
  specifications: { color: "#334155", marginBottom: "28px" },
  primaryButton: { display: "inline-block", padding: "13px 25px", borderRadius: "28px", background: "#ff9800", color: "#fff", textDecoration: "none", fontWeight: 700 },
  secondaryButton: { padding: "12px 22px", border: 0, borderRadius: "24px", background: "#ff9800", color: "#fff", fontWeight: 700, cursor: "pointer" },
  message: { minHeight: "50vh", display: "grid", placeContent: "center", textAlign: "center", color: "#0a3d62", padding: "30px" },
  contactSection: { maxWidth: "1150px", margin: "56px auto 0", padding: "34px", textAlign: "center", background: "#0a3d62", color: "#fff", borderRadius: "12px" },
  contactLink: { color: "#ffd166", fontWeight: 700 },
};

export default ProductDetails;
