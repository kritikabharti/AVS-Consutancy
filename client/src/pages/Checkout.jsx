import React, { useState } from "react";

function Checkout() {
const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
address: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const response = await fetch(
    "http://localhost:5000/api/orders/place-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        productName: "550W Solar Panel",
        price: 18999,
      }),
    }
  );

  const data = await response.json();

  if (data.success) {
    alert("Order Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  } else {
    alert(data.message);
  }
} catch (error) {
  console.log(error);
  alert("Server Error");
}

};

return (
<div
style={{
minHeight: "100vh",
background: "#2d4f81",
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
<form
onSubmit={handleSubmit}
style={{
background: "transparent",
padding: "40px",
width: "450px",
borderRadius: "15px",
boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
}}
>
<h1
style={{
color: "#000",
textAlign: "center",
marginBottom: "25px",
}}
>
Checkout </h1>

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      required
      style={styles.input}
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
      style={styles.input}
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
      required
      style={styles.input}
    />

    <textarea
      name="address"
      placeholder="Delivery Address"
      value={formData.address}
      onChange={handleChange}
      required
      style={{
        ...styles.input,
        height: "100px",
        resize: "none",
      }}
    />

    <button
      type="submit"
      style={{
        width: "100%",
        padding: "15px",
        background: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      Place Order
    </button>
  </form>
</div>

);
}

const styles = {
input: {
width: "100%",
padding: "12px",
backgroundColor: "#fff",
marginBottom: "15px",
color: "#000",
border: "1px solid #ccc",
borderRadius: "8px",
fontSize: "14px",
boxSizing: "border-box",
},
};

export default Checkout;
