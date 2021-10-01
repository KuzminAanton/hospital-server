const mongoose = require('mongoose');

const { Schema } = mongoose;

const listScheme = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = Users = mongoose.model('users', listScheme);
