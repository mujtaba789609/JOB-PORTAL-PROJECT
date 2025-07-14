// ===== Module 7: EventForm.jsx (Frontend UI for Event Creation) =====
import React, { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    speakers: '',
    date: '',
    time: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Event created!');
      navigate('/events');
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to create event');
    }
  };

  return (
    <div style={{
      backgroundImage: `url('/event-bg.png')`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      padding: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        padding: '35px',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🎉 Create New Event</h2>

        <input name="title" placeholder="Event Title" onChange={handleChange} required style={inputStyle} />
        <input name="type" placeholder="Event Type (Seminar, Workshop)" onChange={handleChange} required style={inputStyle} />
        <input name="speakers" placeholder="Speakers (comma separated)" onChange={handleChange} required style={inputStyle} />
        <input name="date" type="date" onChange={handleChange} required style={inputStyle} />
        <input name="time" type="time" onChange={handleChange} required style={inputStyle} />
        <textarea name="description" placeholder="Event Description" onChange={handleChange} required style={{...inputStyle, height: '100px'}} />

        <button type="submit" style={buttonStyle}>Create Event</button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '6px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#28a745',
  color: '#fff',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default EventForm;
