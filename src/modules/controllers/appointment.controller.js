const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../../db/models/users/index');
const Appointment = require('../../db/models/appointment/index');
const Doctors = require('../../db/models/doctors/index');

module.exports.addAppointments = (req, res) => {
  const { userId } = req.user;
  const {
    patientName, doctorName, date, complaints,
  } = req.body;
  if (patientName && doctorName && date && complaints) {
    const appointmentNew = new Appointment({
      patientName,
      doctorName,
      date,
      complaints,
      userId,
    });
    appointmentNew.save().then(() => {
      Appointment.find({ userId }).then((result) => {
        res.send({
          data: result,
        });
      });
    });
  } else {
    res.status(422).send('Value is not correct');
  }
};

module.exports.getDoctors = (req, res) => {
  Doctors.find().then((result) => {
    res.send({
      data: result,
    });
  });
};

module.exports.getAppointments = (req, res) => {
  const { userId } = req.user;
  if (userId) {
    Appointment.find({ userId }).then((result) => {
      res.send({
        data: result,
      });
    });
  } else {
    res.status(422).send('Value is not correct');
  }
};
