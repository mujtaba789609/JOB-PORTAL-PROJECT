// ✅ Modern Post Job Form - Module 4 Styled
import React, { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobType: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/jobs', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Job posted successfully!');
      navigate('/jobs');
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to post job');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/jobform-bg.png')`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          maxWidth: '500px',
          width: '100%'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📤 Post a New Job</h2>

        <input
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <select
          name="jobType"
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Job Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
        </select>
        <textarea
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: '100px' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            padding: '12px',
            borderRadius: '6px',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          Post Job
        </button>
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

export default JobForm;
