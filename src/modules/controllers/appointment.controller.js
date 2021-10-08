const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../../db/models/users/index');
const Appointment = require('../../db/models/appointment/index');
const Doctors = require('../../db/models/doctors/index');

module.exports.addAppointments = async (req, res) => {
  const {
    patientName, doctorName, date, complaints,
  } = req.body;
  if (req.body) {
    const appointmentNew = new Appointment({
      patientName,
      doctorName,
      date,
      complaints,
    });
    await appointmentNew.save().then(() => {
      Appointment.find().then((result) => {
        res.send({
          data: result,
        });
      });
    });
  } else {
    res.status(422).send('Value is not correct');
  }
};

module.exports.getDoctors = async (req, res) => {
  Doctors.find().then((result) => {
    res.send({
      data: result,
    });
  });
};

module.exports.getAppointments = async (req, res) => {
  Appointment.find().then((result) => {
    res.send({
      data: result,
    });
  });
};
