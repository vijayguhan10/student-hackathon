const mongoose = require('mongoose');

const mentorRequestSchema = new mongoose.Schema({
  team: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team',
    required: true
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: 'Event',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mentorRequestSchema;
