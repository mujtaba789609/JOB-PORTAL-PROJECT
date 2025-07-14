// ===== Module 1: User Schema for Authentication =====
const mongoose = require('mongoose');

// module 3 education schema
const educationSchema=new mongoose.Schema({
  degree:String,
  university:String,
  year:String,
  location:String,

});

// module 3 experience schema 
const experienceSchema=new mongoose.Schema({
  title:String,
  organization:String,
  from:String,
  to:String,
  jobType:{
    type:String,
    enum:['full-time','part-time','internship','remote']
  }

});
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },  // user must have a unique email
  password: String,                       // hashed using bcrypt
  role: {
    type: String,
    enum: ['student', 'graduate', 'professional', 'company', 'institute'],
    default: 'student'                    // default role is student
  },
// module 2 fields 
cnic: String,
location:String,
whatsapp: String,
  linkedin: String,
  github: String,
  instagram: String,
  summary: String,
  profilePhoto: String, // will store image file name or url
  // module 3 education and experience schema arrays

  education:[educationSchema], //list of education entries
  experience:[experienceSchema], // list of work experiences
},{ timestamps: true });

module.exports = mongoose.model('User', userSchema);
