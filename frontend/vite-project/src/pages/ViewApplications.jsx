// ✅ Module 6: Frontend - View Applications for a Job
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';
import { useParams } from 'react-router-dom';

const ViewApplications = () => {
  const { jobId } = useParams(); // get job ID from URL
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/apply/job/${jobId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setApplications(res.data);
      } catch (err) {
        console.error('Error fetching applications:', err);
      }
    };

    fetchApplications();
  }, [jobId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Applicants for Job ID: {jobId}</h2>
      {applications.length === 0 ? (
        <p>No applications found for this job.</p>
      ) : (
        <ul>
          {applications.map((app) => (
            <li key={app._id}>
              <strong>Name:</strong> {app.applicant?.name} <br />
              <strong>Email:</strong> {app.applicant?.email} <br />
              <strong>Role:</strong> {app.applicant?.role} <br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewApplications;
