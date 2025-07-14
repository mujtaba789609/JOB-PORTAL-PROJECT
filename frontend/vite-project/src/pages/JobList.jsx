// ✅ Module 11: Final Optimized JobList.jsx with Pagination, Search, and Role Check
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // ✅ Decode token safely

const JobList = () => {
  const [jobs, setJobs] = useState([]); // All fetched jobs
  const [searchTerm, setSearchTerm] = useState(''); // For filtering
  const [userRole, setUserRole] = useState(null); // For role-based access
  const [page, setPage] = useState(1); // Current page for pagination
  const [totalPages, setTotalPages] = useState(1); // Total pages available

  // ✅ Decode JWT role from token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role); // e.g. student, company
      } catch (err) {
        console.error('Token decode failed:', err);
      }
    }
  }, []);

  // ✅ Fetch jobs with pagination
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`/api/jobs?page=${page}&limit=5`);
        setJobs(res.data.jobs);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      }
    };
    fetchJobs();
  }, [page]);

  // ✅ Filter jobs based on search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundImage: "url('/joblisting-bg.png')", // <-- save image as /public/joblistings-bg.png
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.13)",
          backdropFilter: "blur(7px)",
          borderRadius: "18px",
          maxWidth: "680px",
          width: "98vw",
          boxShadow: "0 8px 34px rgba(44,62,80,0.18)",
          border: "1.2px solid rgba(255,255,255,0.25)",
          padding: "38px 28px",
        }}
      >
        <h2 style={{
          fontWeight: 700,
          textAlign: "center",
          fontSize: "1.6rem",
          color: "#1a2e45",
          marginBottom: "22px"
        }}>All Job Listings</h2>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search by title or company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginBottom: '22px',
            padding: '12px',
            width: '100%',
            borderRadius: '8px',
            border: '1.3px solid #d8e1ed',
            fontSize: "1rem",
            background: "rgba(255,255,255,0.97)"
          }}
        />

        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredJobs.map((job) => (
              <li
                key={job._id}
                style={{
                  marginBottom: '20px',
                  border: '1px solid #ccd4ea',
                  borderRadius: "10px",
                  padding: '18px',
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(60,100,150,0.07)"
                }}
              >
                <h3 style={{ margin: "0 0 4px 0", color: "#203360" }}>{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.jobType}</p>
                <p><strong>Description:</strong> {job.description}</p>

                {/* Apply Button */}
                <Link to={`/apply/${job._id}`}>
                  <button style={{
                    marginRight: '10px',
                    padding: "8px 20px",
                    background: "#16a085",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}>Apply</button>
                </Link>

                {/* View Applications Button */}
                {userRole === 'company' || userRole === 'admin' ? (
                  <Link to={`/job/${job._id}/applications`}>
                    <button style={{
                      marginRight: '10px',
                      padding: "8px 20px",
                      background: "#6078ea",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}>View Applications</button>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        )}

        {/* ⏩ Pagination Controls */}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              marginRight: "8px",
              border: "none",
              background: "#f2f5f9",
              color: "#3a456a",
              cursor: page === 1 ? "not-allowed" : "pointer"
            }}
          >
            ⬅️ Prev
          </button>
          <span style={{ margin: '0 10px', fontWeight: 600 }}>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              marginLeft: "8px",
              border: "none",
              background: "#f2f5f9",
              color: "#3a456a",
              cursor: page === totalPages ? "not-allowed" : "pointer"
            }}
          >
            Next ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobList;
