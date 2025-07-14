import React  from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile.jsx"; //module2
import Education from "./pages/Education.jsx"; //module 3
import JobList from './pages/JobList'; //module 4
import JobForm from './pages/JobForm'; //  Add import module 4
import ApplyForm from './pages/ApplyForm'; //  module 5
import ViewApplications from './pages/ViewApplications'; //  Module 6
import EventForm from './pages/EventForm'; //  Module 7
import EventList from './pages/EventList'; //  Module 7
import CompanyProfileForm from './pages/CompanyProfileForm'; // ✅ Module 8
import CompanyList from './pages/CompanyList'; // ✅ Module 8
import NotificationPanel from './pages/NotificationPanel'; // ✅ Module 9
import AdminDashboard from './pages/AdminDashboard'; // ✅ Module 10





function App() {
   
  return (
    <Router>
     
        {/*  Navigation Links */}
       <nav style={{ padding: '15px', background: '#f2f2f2', marginBottom: '20px' }}>
  <a href="/" style={{ marginRight: '15px' }}>🏠 Home</a>
  <a href="/register" style={{ marginRight: '15px' }}>📝 Register</a>
  <a href="/login" style={{ marginRight: '15px' }}>🔐 Login</a>
  <a href="/profile" style={{ marginRight: '15px' }}>👤 Profile</a>
  <a href="/education" style={{ marginRight: '15px' }}>🎓 Education</a>
  <a href="/jobs" style={{ marginRight: '15px' }}>📋 Job Listings</a>
  <a href="/post-job" style={{ marginRight: '15px' }}>📤 Post Job</a>
  <a href="/events" style={{ marginRight: '15px' }}>📆 Events</a>

  <a href="/create-event" style={{ marginRight: '15px' }}>➕ Create Event</a>
  <a href="/create-company" style={{ marginRight: '15px' }}>🏢 Create Profile</a>
<a href="/companies" style={{ marginRight: '15px' }}>🌐 View Companies</a>
<a href="/notifications" style={{ marginRight: '15px' }}>🔔 Notifications</a>

<a href="/admin" style={{ marginRight: '15px' }}>🛠️ Admin Panel</a>




</nav>



        {/*  Route Setup */}
        <Routes>
          <Route path="/"
  element={
    <div
      style={{
        position: "relative",
        minHeight: "calc(100vh - 60px)", // Adjust if your navbar is taller/shorter
        width: "100%",
        backgroundColor: "#181E2A", // fallback color matching the image
        backgroundImage: "url('/jobportal3d.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",         // <- key change
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(120deg, rgba(15,23,42,0.27) 55%, rgba(0,212,255,0.11) 100%)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />
      {/* Centered Welcome Card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(255, 255, 255, 0.13)",
          backdropFilter: "blur(7px)",
          borderRadius: "22px",
          boxShadow: "0 6px 32px rgba(0,0,0,0.16)",
          padding: "38px 48px",
          maxWidth: "540px",
          width: "90vw",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#202124",
            margin: 0,
            textShadow: "0 1.5px 8px rgba(0,0,0,0.06)"
          }}
        >Welcome to Job Portal</h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#222b44",
            margin: "20px 0 0 0"
          }}
        >
      
        Find your future with us – jobs, events, and more!
      </p>
    </div>
    </div>
  }
/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/education" element={<Education />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/post-job" element={<JobForm />} />
          <Route path="/apply/:jobId" element={<ApplyForm />} /> {/*  Apply to jobs */}
          <Route path="/job/:jobId/applications" element={<ViewApplications />} />
          <Route path="/create-event" element={<EventForm />} /> 
<Route path="/events" element={<EventList />} />
<Route path="/create-company" element={<CompanyProfileForm />} />
<Route path="/companies" element={<CompanyList />} />
<Route path="/notifications" element={<NotificationPanel />} />
<Route path="/admin" element={<AdminDashboard />} />






        </Routes>
    

    </Router>
  );
}
export default App;