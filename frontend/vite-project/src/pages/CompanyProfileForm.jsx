// ✅ Module 8: Company/University Profile Form
import React, { useState } from 'react';
import axios from '../utils/axiosInstance';

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    services: '',
    tagline: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/companies', formData);
      setMessage('✅ Profile created successfully!');
    } catch (err) {
      setMessage('❌ Failed to create profile');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/company-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255,255,255,0.95)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>🏢 Create Profile</h2>

        <input
          name="name"
          placeholder="Company/University Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="website"
          placeholder="Website"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="services"
          placeholder="Services Offered"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="tagline"
          placeholder="Tagline"
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            padding: '12px',
            width: '100%',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '15px',
          }}
        >
          Submit Profile
        </button>

        {message && (
          <p style={{ textAlign: 'center', marginTop: '15px', color: 'green' }}>{message}</p>
        )}
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

export default CompanyProfile;

