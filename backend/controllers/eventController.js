// ===== Module 7: Event Controller =====

// 3 main functions:
// 1. createEvent: used by admin/institutes to add an event.
// 2. getEvents: public list of all events.
// 3. registerForEvent: allows users to register for a specific event.

const Event = require('../models/Event');

// ✅ Create new event (Admin/Institute)
exports.createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, createdBy: req.user.id });
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};

// ✅ Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'name role');
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

// ✅ Register for an event
exports.registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event.attendees.includes(req.user.id)) {
      event.attendees.push(req.user.id);
      await event.save();
      res.json({ message: 'Registered successfully!' });
    } else {
      res.status(400).json({ error: 'Already registered' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to register' });
  }
};
