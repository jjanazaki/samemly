import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }), 
      });

      const data = await response.json();

      if (response.ok) {
        alert("تم إنشاء الحساب بنجاح!");
        navigate("/login");
      } else {
        setError(data.error || "حدث خطأ ما");
      }
    } catch (err) {
      setError("لا يمكن الاتصال بالسيرفر");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSignup}>
        <h1>إنشاء حساب</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">إنشاء حساب</button>
        <p>لديك حساب؟ <Link to="/login">تسجيل الدخول</Link></p>
      </form>
    </div>
  );
}