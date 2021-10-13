const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../../db/models/users/index');
const Appointment = require('../../db/models/appointment/index');
const Doctors = require('../../db/models/doctors/index');

module.exports.addAppointments = async (req, res) => {

};

module.exports.getAppointments = async (req, res) => {
  Appointment.find().then((result) => {
    res.send({
      data: result,
    });
  });
};
