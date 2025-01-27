const express = require('express');
const {
  userLogin,
  signupMasterAdmin,
  loginMasterAdmin
} = require('../controllers/authController.js');

const router = express.Router();

router.post('/login', userLogin);
router.post('/signupMaster', signupMasterAdmin);
router.post('/loginMaster', loginMasterAdmin);

module.exports = router;
