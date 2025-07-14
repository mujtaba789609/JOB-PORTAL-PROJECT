// src/pages/Education.jsx

import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const [formData, setFormData] = useState({
    degree: '',
    university: '',
    year: '',
    location: '',
    title: '',
    organization: '',
    from: '',
    to: '',
    jobType: 'full-time'
  });

  const [existingData, setExistingData] = useState(null);
  const navigate = useNavigate();

  // 📤 Fetch existing data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/userdata", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setExistingData(res.data);
      } catch (err) {
        alert("Login required");
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  // 📩 Handle input changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit education + experience
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.put("/api/userdata", {
        education: [{
          degree: formData.degree,
          university: formData.university,
          year: formData.year,
          location: formData.location
        }],
        experience: [{
          title: formData.title,
          organization: formData.organization,
          from: formData.from,
          to: formData.to,
          jobType: formData.jobType
        }]
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Education & experience saved!");
    } catch (err) {
      alert("Failed to save");
    }
  };

 return (
    <div
      style={{
        backgroundImage: "url('/education-bg.png')", // <-- use your generated image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.14)",
          backdropFilter: "blur(8px)",
          borderRadius: "20px",
          padding: "36px 30px",
          maxWidth: "440px",
          width: "95vw",
          boxShadow: "0 8px 36px rgba(44,62,80,0.16)",
          border: "1.5px solid rgba(255,255,255,0.19)",
          zIndex: 2,
        }}
      >
        <h2 style={{
          textAlign: 'center',
          marginBottom: '26px',
          fontWeight: 700,
          fontSize: "1.7rem",
          color: "#2d3e5e"
        }}>
          🎓 Education & Experience
        </h2>
        <form onSubmit={handleSubmit}>
          <h4 style={{margin: "14px 0 8px 0", color: "#263b57"}}>Education</h4>
          <input name="degree" placeholder="Degree" onChange={handleChange} required style={inputStyle}/>
          <input name="university" placeholder="University" onChange={handleChange} required style={inputStyle}/>
          <input name="year" placeholder="Year" onChange={handleChange} required style={inputStyle}/>
          <input name="location" placeholder="Location" onChange={handleChange} required style={inputStyle}/>

          <h4 style={{margin: "16px 0 8px 0", color: "#263b57"}}>Experience</h4>
          <input name="title" placeholder="Job Title" onChange={handleChange} required style={inputStyle}/>
          <input name="organization" placeholder="Organization" onChange={handleChange} required style={inputStyle}/>
          <input name="from" placeholder="From" onChange={handleChange} required style={inputStyle}/>
          <input name="to" placeholder="To" onChange={handleChange} required style={inputStyle}/>
          <select name="jobType" onChange={handleChange} required style={inputStyle}>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
            <option value="remote">Remote</option>
          </select>

          <button type="submit" style={buttonStyle}>Save</button>
        </form>
        {/* 📚 Display existing data if available */}
        {existingData && (
          <div style={{ marginTop: '20px', color: "#16324f" }}>
            <h3>Saved Education:</h3>
            {existingData.education.map((edu, index) => (
              <p key={index}>{edu.degree} at {edu.university}, {edu.year} ({edu.location})</p>
            ))}
            <h3>Saved Experience:</h3>
            {existingData.experience.map((exp, index) => (
              <p key={index}>{exp.title} at {exp.organization} ({exp.jobType})</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1.3px solid #c5d0e6",
  fontSize: "1rem",
  background: "rgba(255,255,255,0.96)",
  color: "#2d3e5e",
  fontWeight: 500,
  outline: "none"
};

const buttonStyle = {
  width: "100%",
  padding: "12px 0",
  background: "linear-gradient(90deg,#5f8bfa,#34425a)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  marginTop: "12px",
  fontWeight: 700,
  fontSize: "1.1rem",
  letterSpacing: "1px",
  boxShadow: "0 1px 6px rgba(44,62,80,0.10)",
  cursor: "pointer"
};


export default Education;
