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
  getDoctors,
  editAppointments,
} = require('../controllers/appointment.controller');

router.post('/auth/newUser', newUser);
router.post('/auth/login', login);
router.post('/getDoctors', auth, getDoctors);
router.post('/addAppointments', auth, addAppointments);
router.post('/getAppointments', auth, getAppointments);
router.patch('/editAppointments', auth, editAppointments);

module.exports = router;
