// ===== Module 9: Notification Panel =====
// ✅ Notifications.jsx – Modern styled UI
// ✅ Notifications.jsx – with image background
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifs = async () => {
      try {
        const res = await axios.get('/api/notifications');
        setNotifications(res.data);
      } catch (err) {
        console.error('Failed to fetch notifications:', err);
      }
    };
    fetchNotifs();
  }, []);

  return (
    <div
      style={{
        padding: '30px',
        minHeight: '100vh',
        backgroundImage: `url('/notify-bg.png')`, // ✅ relative path from public/
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white', // Optional for better contrast
        backdropFilter: 'brightness(0.85)', // Optional dim effect
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>🔔 Your Notifications</h2>

      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {notifications.map((notif) => (
            <li
              key={notif._id}
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                borderRadius: '10px',
                padding: '15px',
                marginBottom: '15px',
                color: '#333',
              }}
            >
              <p style={{ margin: 0 }}>{notif.message}</p>
              <small style={{ color: '#666' }}>
                📅 {new Date(notif.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
