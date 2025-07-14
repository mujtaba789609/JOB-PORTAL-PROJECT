// ===== Module 7: EventList.jsx - To display all events =====
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events');
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events:', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div style={{
        backgroundImage: `url('/eventlist-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px', }}>

      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📅 Upcoming Events</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {events.map((event) => (
          <div key={event._id} style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '20px'
          }}>
            <h3>{event.title}</h3>
            <p><strong>Type:</strong> {event.type}</p>
            <p><strong>Speakers:</strong> {event.speakers}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
