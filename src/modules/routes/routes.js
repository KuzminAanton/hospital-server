const express = require('express');
const auth = require('../../middleware/auth.middleware');

const router = express.Router();

const {
  newUser,
  login,
} = require('../controllers/user.cotroller');
const {
  addAppointments,
  getAppointments,
} = require('../controllers/appointment.controller');

router.post('/auth/newUser', newUser);
router.post('/auth/login', login);
router.post('/addAppointments', auth, addAppointments);
router.post('/getAppointments', auth, getAppointments);

module.exports = router;
