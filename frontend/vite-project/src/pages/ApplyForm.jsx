// ✅ ApplyForm.jsx – Module 5 (Modern UI Styled)
import React, { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const ApplyForm = () => {
  const { jobId } = useParams(); // Get job ID from route
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    resume: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/applications', { ...formData, jobId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('✅ Application submitted successfully!');
      navigate('/jobs');
    } catch (err) {
      alert(err.response?.data?.error || '❌ Application failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📄 Apply for This Job</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Resume (Paste Text)</label>
        <textarea
          name="resume"
          placeholder="Paste your resume here..."
          value={formData.resume}
          onChange={handleChange}
          required
          style={styles.textarea}
        />

        <label style={styles.label}>Cover Letter (Optional)</label>
        <textarea
          name="coverLetter"
          placeholder="Write a short cover letter..."
          value={formData.coverLetter}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>📤 Submit Application</button>
      </form>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fdfdfd',
    borderRadius: '10px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  textarea: {
    marginBottom: '20px',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    resize: 'vertical'
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    alignSelf: 'center'
  }
};

export default ApplyForm;
