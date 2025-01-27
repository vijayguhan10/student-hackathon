const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  collegecode: { type: Number, required: true },
  address: { type: String, required: true },
  contactnumber: { type: String, required: true },
  active: { type: Boolean, default: true },
  counts: {
    superadmin: { type: Number, default: 1 },
    primeadmin: { type: Number, default: 0 },
    normaladmin: { type: Number, default: 0 },
    student: { type: Number, default: 0 }
  },
  superadmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  primeadmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  normaladmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = collegeSchema;
