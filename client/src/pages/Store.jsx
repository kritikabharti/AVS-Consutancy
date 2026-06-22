import React from "react";
import { useNavigate } from "react-router-dom";


const products = [
  {
    id: 1,
    name: "Solar Panel 550W",
    price: "₹18,999",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    path: "/solar-panel-product",
  },
  {
    id: 2,
    name: "Solar Inverter",
    price: "₹12,499",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    path: "/solar-inverter-product",
  },
  {
    id: 3,
    name: "Solar Battery",
    price: "₹15,999",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    path: "/solar-battery-product",
  },
  {
    id: 4,
    name: "Solar Street Light",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    path: "/solar-street-light-product",
  },
];

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
    marginBottom: "40px",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
    paddingBottom: "20px",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  price: {
    color: "#28a745",
    fontSize: "1.3rem",
    fontWeight: "bold",
  },

  button: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "30px",
    background: "#ff9800",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

function Store() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Solar Store</h1>

      <div style={styles.productGrid}>
        {products.map((product) => (
          <div
            key={product.id}
            style={styles.card}
          >
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h3>{product.name}</h3>

            <p style={styles.price}>{product.price}</p>

            <button
  style={styles.button}
  onClick={() => navigate(product.path)}
>
  View Details
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;