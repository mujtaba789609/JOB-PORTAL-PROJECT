const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes (to be defined later)
app.use('/api/auth', require('./routes/authRoutes'));     // for module 1   
 app.use('/api/profile', require('./routes/profileRoutes')); // for module 2 
app.use('/api/userdata', require('./routes/eduExpRoutes')); // for module 3 
app.use('/api/jobs', require('./routes/jobRoutes')); // for module 4
app.use('/api/applications', require('./routes/applicationRoutes')); // for module 5
app.use('/api/events', require('./routes/eventRoutes')); // ✅ Module 7
app.use('/api/companies', require('./routes/companyRoutes')); // ✅ Module 8
app.use('/api/notifications', require('./routes/notificationRoutes')); // ✅ Module 9
app.use('/api/admin', require('./routes/adminRoutes')); // ✅ Module 10




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// module.exports=router;
