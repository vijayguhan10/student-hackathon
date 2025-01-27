const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a team name'],
    trim: true
  },
  leader: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  members: [
    {
      student: { type: mongoose.Schema.ObjectId, ref: 'User' },
      role: { type: String, required: true }
    }
  ],
  event: {
    type: mongoose.Schema.ObjectId,
    ref: 'Event',
    required: true
  },
  mentor: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['pending', 'applied', 'approved'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = teamSchema;
