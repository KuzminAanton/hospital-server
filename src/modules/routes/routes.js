const express = require('express');

const router = express.Router();

const {
  newUser,
} = require('../controllers/user.cotroller');
const {} = require('../controllers/appointment.controller');

router.post('/auth/newUser', newUser);

module.exports = router;
