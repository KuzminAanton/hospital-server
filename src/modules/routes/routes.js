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
  editAppointments,
  deleteAppointments,
} = require('../controllers/appointment.controller');

router.post('/auth/newUser', newUser);
router.post('/auth/login', login);
router.get('/getDoctors', auth, getDoctors);
router.post('/addAppointments', auth, addAppointments);
router.get('/getAppointments', auth, getAppointments);
router.patch('/editAppointments', auth, editAppointments);
router.delete('/deleteAppointments', auth, deleteAppointments);

module.exports = router;
