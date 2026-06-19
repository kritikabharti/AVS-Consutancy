import { useState } from "react";
import axios from "axios";
import backgroundImageFile from '../assets/ig.jpg';  

function ForgotPassword() {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const res = await axios.post(
    "http://localhost:5000/api/user/forgot-password",
    { email }
  );

  setMessage(res.data.message);
} catch (error) {
  setMessage(
    error.response?.data?.message || "Something went wrong"
  );
}


};

return (
<div
style={{
minHeight: "100vh",
 backgroundImage: `url(${backgroundImageFile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
     backgroundColor: '#0a192f',
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "14px",
}}
>
<div
style={{
width: "100%",
maxWidth: "300px",
background: "transparent",
borderRadius: "20px",
padding: "50px 60px",
 boxShadow: '0 8px 24px white',
}}
>
<h1
style={{
textAlign: "center",
color: "white",
marginBottom: "50px",
}}
>
AVS SOLAR </h1>

    <h2
      style={{
        textAlign: "center",
        color: "white",
        marginBottom: "40px",
        fontWeight: "normal",
      }}
    >
      Forgot Password
    </h2>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "10px",
          border: "none",
          background: "#3d3d3d",
          color: "#fff",
          fontSize: "18px",
          marginBottom: "15px",
          boxSizing: "border-box",
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "16px",
          background: "#0b57d0",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Send Reset Link
      </button>
    </form>

    {message && (
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "green",
          fontWeight: "bold",
        }}
      >
        {message}
      </p>
    )}
  </div>
</div>


);
}

export default ForgotPassword;
