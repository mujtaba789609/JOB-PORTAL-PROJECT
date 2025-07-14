// ✅ Module 10: Admin Dashboard Frontend
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchJobs();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/admin/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to load users:', err);
    }
  };

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Failed to load jobs:', err);
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`/api/admin/users/${userId}`);
      alert('User deleted');
      fetchUsers();
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>

      <h3>All Users</h3>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} ({user.email}) - {user.role}
            <button onClick={() => deleteUser(user._id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3>All Jobs</h3>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            {job.title} at {job.company} ({job.jobType})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
