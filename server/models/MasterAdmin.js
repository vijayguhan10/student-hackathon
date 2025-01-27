const mongoose = require('mongoose');

const masterAdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  colleges: [
    {
      collegeid: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
      dbname: { type: String, required: true },
      active: { type: Boolean, deafult: true }
    }
  ]
});

module.exports = mongoose.model('MasterAdmin', masterAdminSchema);
