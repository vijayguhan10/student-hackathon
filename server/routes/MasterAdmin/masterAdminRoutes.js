const express = require('express');
const collegeRoutes = require('./collegeRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/college', collegeRoutes);
router.use('/user', userRoutes);

module.exports = router;
