const mongoose = require('mongoose');

const { Schema } = mongoose;

const listScheme = new Schema({
  doctor: { type: String, required: true },
});

module.exports = Doctor = mongoose.model('doctor', listScheme);
