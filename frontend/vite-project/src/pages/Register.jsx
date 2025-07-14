import React, { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/register-bg.png')",  // <-- Fix typo here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255,255,255,0.84)', // lighter glassmorphism
          padding: '34px 28px',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          width: '100%',
          maxWidth: '370px',          // looks closer to the image size
          minWidth: '260px',
          textAlign: 'center'
        }}
      >
        <h2 style={{
          fontWeight: 700,
          fontSize: '1.8rem',
          marginBottom: '20px',
          color: '#232946',
          letterSpacing: '1px'
        }}>
          Register
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <select name="role" onChange={handleChange} style={inputStyle} value={formData.role}>
          <option value="student">Student</option>
          <option value="graduate">Graduate</option>
          <option value="professional">Professional</option>
          <option value="company">Company</option>
          <option value="institute">Institute</option>
          <option value="admin">Admin</option> {/* ⚠️ Add this for testing only */}
        </select>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 0',
            background: "linear-gradient(90deg, #17ead9 0%, #6078ea 100%)",
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '1.1rem',
            marginTop: '8px',
            boxShadow: '0 2px 8px rgba(96,120,234,0.10)'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '1.5px solid #e2e6ee',
  fontSize: '1rem',
  background: 'rgba(255,255,255,0.93)',
  color: '#222',
  fontWeight: 500,
  outline: 'none'
};

export default Register;
