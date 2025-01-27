const express = require('express');
const router = express.Router();

const authorizeRoles = require('../../middlewares/authorizeRoles');
const {
  createCollege,
  getAllColleges,
  getCollegeById,
  updateCollege,
  deactivateCollege,
  activateCollege
} = require('../../controllers/MasterAdmin/collegeController');

router.post('/', authorizeRoles('masterAdmin'), createCollege);
router.get('/', authorizeRoles('masterAdmin'), getAllColleges);
router.get('/:id', authorizeRoles('masterAdmin'), getCollegeById);
router.put('/:id', authorizeRoles('masterAdmin'), updateCollege);
router.patch(
  '/deactivate/:id',
  authorizeRoles('masterAdmin'),
  deactivateCollege
);
router.patch('/activate/:id', authorizeRoles('masterAdmin'), activateCollege);

module.exports = router;
