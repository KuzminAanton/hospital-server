const express = require('express');

const router = express.Router();

const {
  newUser,
  login,
} = require('../controllers/user.cotroller');
const {} = require('../controllers/appointment.controller');

router.post('/auth/newUser', newUser);
router.post('/auth/login', login);

module.exports = router;
