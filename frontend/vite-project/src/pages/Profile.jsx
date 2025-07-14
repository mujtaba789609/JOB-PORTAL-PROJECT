import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const Profile = () => {
  const [userData, setUserData] = useState({ name: '', email: '', role: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/profile');
        setUserData(res.data);
      } catch (err) {
        console.error('Failed to fetch profile:', err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put('/api/profile', userData);
      setIsEditing(false);
      alert('Profile updated!');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update profile');
    }
  };

  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url('/profile-bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* DARK OVERLAY for contrast */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        background: 'rgba(24,32,58,0.55)', // a blue-black tint overlay
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      {/* PROFILE CARD */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        background: 'rgba(255,255,255,0.13)',
        backdropFilter: 'blur(10px)',
        padding: '38px 34px',
        borderRadius: '18px',
        minWidth: '280px',
        maxWidth: '410px',
        width: '94vw',
        boxShadow: '0 6px 32px rgba(30, 44, 80, 0.22)',
        border: '1.2px solid rgba(255,255,255,0.38)'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '25px',
          fontWeight: 800,
          fontSize: '1.9rem',
          color: '#232946',
          letterSpacing: '1px'
        }}>👤 Your Profile</h2>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          disabled={!isEditing}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          disabled
          style={inputStyle}
        />
        <input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
          placeholder="Role"
          disabled={!isEditing}
          style={inputStyle}
        />
        {isEditing ? (
          <button onClick={handleSave} style={buttonStyle}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} style={buttonStyle}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  marginBottom: '13px',
  borderRadius: '8px',
  border: '1.3px solid #cfd6e1',
  fontSize: '1.07rem',
  background: 'rgba(255,255,255,0.95)',
  color: '#222',
  fontWeight: 500,
  outline: 'none'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  background: "linear-gradient(90deg,#17ead9 0%, #6078ea 100%)",
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: '1.1rem',
  marginTop: '8px',
  boxShadow: '0 2px 12px rgba(60,140,240,0.15)'
};

export default Profile;
