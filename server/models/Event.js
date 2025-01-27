const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  poster: String,
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  startDate: {
    type: Date,
    required: [true, 'Please add a start date']
  },
  endDate: {
    type: Date,
    required: [true, 'Please add an end date']
  },
  registrationDeadline: {
    type: Date,
    required: [true, 'Please add a registration deadline']
  },
  maxTeamSize: {
    type: Number,
    required: [true, 'Please specify max team size']
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming'
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  hostedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Host'
  },
  teams: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Team'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = eventSchema;
