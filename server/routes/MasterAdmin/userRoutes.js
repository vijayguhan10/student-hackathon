const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const authorizeRoles = require('../../middlewares/authorizeRoles');
const {
  bulkCreateStudents,
  createUser,
  getUsersByRole,
  updateUser
} = require('../../controllers/MasterAdmin/userController');

router.post(
  '/import-students/:collegeid',
  authorizeRoles('masterAdmin'),
  upload.single('file'),
  bulkCreateStudents
);
router.post('/:collegeid', authorizeRoles('masterAdmin'), createUser);
router.get('/:collegeid/:role', authorizeRoles('masterAdmin'), getUsersByRole);
router.put('/:collegeid/:role', authorizeRoles('masterAdmin'), updateUser);

module.exports = router;
