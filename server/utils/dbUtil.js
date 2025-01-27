const mongoose = require('mongoose');
const getConnection = require('./getConnection');

const College = require('../models/College');
const User = require('../models/User');
const Event = require('../models/Event');
const Host = require('../models/Host');
const Team = require('../models/Team');
const TeamRequest = require('../models/TeamRequest');
const MentorRequest = require('../models/MetorRequest');

const connectModels = async (db) => {
  if (typeof db === 'string') {
    try {
      db = await getConnection(db);
    } catch (error) {
      throw new Error(`Failed to connect to database: ${error.message}`);
    }
  }

  return {
    CollegeModel: db.model('College', College),
    UserModel: db.model('User', User),
    EventModel: db.model('Event', Event),
    HostModel: db.model('Host', Host),
    TeamModel: db.model('Team', Team),
    TeamRequestModel: db.model('TeamRequest', TeamRequest),
    MentorRequestModel: db.model('MentorRequest', MentorRequest)
  };
};

module.exports = connectModels;
