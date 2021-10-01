const mongoose = require('mongoose');

const { Schema } = mongoose;

const listScheme = new Schema({
  patientName: { type: String, required: true },
  doctorName: { type: String, required: true },
  date: { type: String, required: true },
  complaints: { type: String, required: true },
});

module.exports = Appointment = mongoose.model('appointment', listScheme);
