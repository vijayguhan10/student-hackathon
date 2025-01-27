const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ['superAdmin', 'primeAdmin', 'normalAdmin', 'student'],
    required: true
  },
  password: { type: String, required: true },
  college: { type: mongoose.Schema.ObjectId, ref: 'College' },
  department: { type: String },
  active: { type: Boolean, default: true },
  eventsParticipated: [
    {
      event: { type: mongoose.Schema.ObjectId, ref: 'Event' },
      role: { type: String } // e.g., 'Team Member', 'Leader', 'Mentor'
    }
  ],
  workshopsAttended: [
    {
      workshop: { type: mongoose.Schema.ObjectId, ref: 'Event' }
    }
  ],
  internships: [
    {
      company: String,
      duration: String
    }
  ]
});

module.exports = userSchema;
