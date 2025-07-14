import React, { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/profile');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

return (
  <div
    style={{
      backgroundImage: 'url("/login.png.png")', // <-- make sure your image is in public folder and matches this name
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0', // Remove extra padding to avoid scroll bars
      boxSizing: 'border-box',
      overflow: 'auto',
    }}
  >
    <form
      onSubmit={handleSubmit}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '40px 28px',
        borderRadius: '16px',
        boxShadow: '0 4px 32px rgba(30,60,120,0.18)',
        maxWidth: '390px',
        width: '90vw',
        minWidth: '260px',
        textAlign: 'center'
      }}
    >
      <h2 style={{ marginBottom: '22px', fontWeight: 700, color: "#2c3e50", fontSize: '2rem' }}>
        <span role="img" aria-label="lock">🔐</span> Login
      </h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '13px 14px',
          margin: '12px 0',
          borderRadius: '8px',
          border: '1.2px solid #c5d0e6',
          fontSize: '1rem'
        }}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '13px 14px',
          margin: '12px 0',
          borderRadius: '8px',
          border: '1.2px solid #c5d0e6',
          fontSize: '1rem'
        }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '13px 0',
          background: 'linear-gradient(90deg,#5f8bfa,#34425a)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          marginTop: '14px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          letterSpacing: '1px',
          boxShadow: '0 1px 6px rgba(44,62,80,0.10)'
        }}
      >
        Login
      </button>
    </form>
  </div>
);
};
export default Login;
