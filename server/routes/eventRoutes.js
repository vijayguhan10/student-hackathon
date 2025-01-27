const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddleware');

const authorizeRoles = require('../middlewares/authorizeRoles');
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

router.post(
  '/',
  authorizeRoles('primeAdmin'),
  upload.single('poster'),
  createEvent
);
router.get(
  '/',
  authorizeRoles('primeAdmin', 'normalAdmin', 'student'),
  getEvents
);
router.get(
  '/:id',
  authorizeRoles('primeAdmin', 'normalAdmin', 'student'),
  getEventById
);
router.put(
  '/:id',
  authorizeRoles('primeAdmin'),
  upload.single('poster'),
  updateEvent
);
router.delete('/:id', authorizeRoles('primeAdmin'), deleteEvent);

module.exports = router;
