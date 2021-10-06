const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../../db/models/users/index');
const Appointment = require('../../db/models/appointment/index');
const Doctors = require('../../db/models/doctors/index');

module.exports.addAppointments = async (req, res) => {

};

// module.exports.addDoctors = async (req, res) => {
//   const { doctor } = req.body;
//   if (doctor) {
//     const doctorNew = new Doctors({
//       doctor,
//     });
//     await doctorNew.save().then(
//       res.json({ message: 'added doctor!' }),
//     );
//   } else {
//     res.status(422).send('Value is not correct');
//   }
// };

module.exports.getAppointments = async (req, res) => {
  console.log(req.body)
  Appointment.find().then((result) => {
    res.send({
      data: result,
    });
  });
};
