const connectModels = require('../../utils/dbUtil');

exports.createTeam = async (req, res) => {
  try {
    const { name, members, event, mentor } = req.body;
    const leader = req.user.id;

    const team = await Team.create({
      name,
      leader,
      event
    });

    if (members && members.length > 0) {
      for (const member of members) {
        await TeamRequest.create({
          team: team._id,
          user: member,
          role: 'member'
        });
      }
    }

    if (mentor) {
      await TeamRequest.create({
        team: team._id,
        user: mentor,
        role: 'mentor'
      });
    }

    res.status(201).json({
      success: true,
      data: team
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
