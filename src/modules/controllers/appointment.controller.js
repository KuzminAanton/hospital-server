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

module.exports.editAppointments = async (req, res) => {
  const {
    patientName, doctorName, date, complaints,
  } = req.body;
  const { _id } = req.query;
  if (_id && patientName && doctorName && date && complaints) {
    Appointment.updateOne({ _id }, req.body).then(() => {
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
