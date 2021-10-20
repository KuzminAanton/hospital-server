const express = require('express');
const auth = require('../../middleware/auth.middleware');

const router = express.Router();

const {
  newUser,
  login,
} = require('../controllers/user.cotroller');
const {
  getAppointments,
  addAppointments,
  getDoctors,
} = require('../controllers/appointment.controller');

router.post('/auth/newUser', newUser);
router.post('/auth/login', login);
router.get('/getAppointments', auth, getAppointments);
router.post('/addAppointments', auth, addAppointments);
router.get('/getDoctors', auth, getDoctors);

module.exports = router;
