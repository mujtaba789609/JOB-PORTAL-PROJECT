// This schema stores event information such as title, type, speakers, date, and time.
// The "createdBy" field stores the user (admin/institute) who created the event.
// The "attendees" field holds the registered users' IDs.


// ===== Module 7: Event Model =====
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  speakers: { type: [String] },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // link to user who posted it
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Event', eventSchema);
