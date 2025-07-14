# 📋 Job Portal Project (MERN Stack)

This is a full-featured MERN Stack-based Job Portal built during the AICP Internship, supporting registration, login, profiles, job listings, applications, event management, notifications, admin control, and more.

---

## 🔧 Technologies Used

- Frontend: React (Vite), Axios, React Router DOM
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT
- Styling: Custom CSS
- Dev Tools: Nodemon, dotenv, MongoDB Compass/Postman

---

## 📁 Folder Structure

job-portal-project/
├── backend/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── profileController.js
│ │ ├── eduExpController.js
│ │ ├── jobController.js
│ │ ├── applicationController.js
│ │ ├── eventController.js
│ │ ├── companyController.js
│ │ ├── notificationController.js
│ │ └── adminController.js
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── app.js
│
├── frontend/
│ └── vite-project/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Register.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Profile.jsx
│ │ │ ├── Education.jsx
│ │ │ ├── JobList.jsx
│ │ │ ├── JobForm.jsx
│ │ │ ├── ApplyForm.jsx
│ │ │ ├── ViewApplications.jsx
│ │ │ ├── EventForm.jsx
│ │ │ ├── EventList.jsx
│ │ │ ├── CompanyProfile.jsx
│ │ │ ├── CompanyList.jsx
│ │ │ ├── NotificationPage.jsx
│ │ │ └── AdminDashboard.jsx
│ │ ├── utils/
│ │ │ └── axiosInstance.js
│ │ └── App.jsx
│ └── public/
│ └── (background images)



---

## 🚀 Modules and Routes

### ✅ Module 1: Authentication
| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |

### ✅ Module 2: Profile Management
| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/profile` | Get user profile |
| PUT | `/api/profile` | Update user profile |

### ✅ Module 3: Education & Experience
| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/userdata/education` | Add education |
| POST | `/api/userdata/experience` | Add experience |
| GET | `/api/userdata` | Get all education/experience |

### ✅ Module 4: Job Listings
| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/jobs` | Post a job |
| GET | `/api/jobs` | Get all job listings |

### ✅ Module 5: Job Applications
| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/applications` | Apply to a job |

### ✅ Module 6: View Applications
| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/applications/job/:jobId` | View applicants by job |

### ✅ Module 7: Event Management
| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/events` | Create new event |
| GET | `/api/events` | List all events |

### ✅ Module 8: Company & University Profiles
| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/companies` | Create company profile |
| GET | `/api/companies` | Get all companies |
| GET | `/api/companies/me` | Get logged-in user’s company profile |

### ✅ Module 9: Notifications
| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/notifications` | Create notification |
| GET | `/api/notifications/me` | Get logged-in user notifications |

### ✅ Module 10: Admin Control Panel
| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/admin/users` | List all users |
| PUT | `/api/admin/job/:id/approve` | Approve job |
| PUT | `/api/admin/event/:id/approve` | Approve event |

---

## 🌐 Frontend Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/register` | Register.jsx | Registration form |
| `/login` | Login.jsx | Login form |
| `/profile` | Profile.jsx | View/update profile |
| `/education` | Education.jsx | Add education/experience |
| `/jobs` | JobList.jsx | Job listings |
| `/post-job` | JobForm.jsx | Post a job (company only) |
| `/apply/:jobId` | ApplyForm.jsx | Apply for job |
| `/job/:jobId/applications` | ViewApplications.jsx | Admin/company view applicants |
| `/events` | EventList.jsx | List all events |
| `/create-event` | EventForm.jsx | Create new event |
| `/create-company-profile` | CompanyProfile.jsx | Create company/university profile |
| `/companies` | CompanyList.jsx | View all companies |
| `/notifications` | NotificationPage.jsx | See notifications |
| `/admin` | AdminDashboard.jsx | Admin control panel |

---

## 🛠 Setup Instructions

### Backend

```bash
cd backend
npm install
npx nodemon app.js
  
MongoDB URI must be in .env as:
MONGO_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=yourSecretKey


### frontend
cd frontend/vite-project
npm install
npm run dev


📌 Final Notes
All users are authenticated via JWT tokens.

Admins/Companies have restricted access to advanced views.

All backend and frontend modules are modular, scalable, and componentized.

Made with 💻 by Mujtaba during the AICP MERN Internship.



