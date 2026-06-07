import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/choices");
      } else {
        // This takes the specific error message sent by the backend!
        setError(data.error); 
      }
    } catch (err) {
      setError("لا يمكن الاتصال بالسيرفر");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h1>تسجيل الدخول</h1>
        
        {/* Updated Error message styling with your exact color code */}
        {error && (
          <p style={{ color: "#15E3C4", fontWeight: "bold", marginBottom: "15px" }}>
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="اسم المستخدم أو البريد الإلكتروني"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)} // Fixes the mismatch
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">تسجيل الدخول</button>
        <p>ليس لديك حساب؟ <Link to="/signup">إنشاء حساب</Link></p>
      </form>
    </div>
  );
}