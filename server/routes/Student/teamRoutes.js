const express = require('express');
const router = express.Router();
const { createTeam } = require('../../controllers/Student/teamController');
const authorizeRoles = require('../../middlewares/authorizeRoles');

router.post('/', authorizeRoles('student'), createTeam);

module.exports = router;
