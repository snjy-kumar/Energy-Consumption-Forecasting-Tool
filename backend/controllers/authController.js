const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../utils/authUtils');

// Sign up user
const signUp = async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save new user
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({ message: 'User created successfully' });
};

// Login user
const login = async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = generateToken(user._id);

  res.json({ token });
};

module.exports = { signUp, login };
