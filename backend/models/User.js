// models/User.js
const mongoose = require('mongoose');

// Define the schema for the User
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('TestUser', UserSchema);

module.exports = User;
