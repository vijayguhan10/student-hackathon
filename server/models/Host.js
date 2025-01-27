const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the host name']
  },
  type: {
    type: String,
    enum: ['department', 'college', 'organization'],
    required: [true, 'Please specify the host type']
  },
  contact: {
    email: { type: String },
    phone: { type: String }
  },
  eventsHosted: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Event'
    }
  ]
});

module.exports = hostSchema;
