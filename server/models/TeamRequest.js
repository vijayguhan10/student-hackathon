const mongoose = require('mongoose');

const teamRequestSchema = new mongoose.Schema({
  team: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team',
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  role: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = teamRequestSchema;
