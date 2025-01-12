const User = require('../models/User');

// Get user profile (protected)
const getProfile = async (req, res) => {
  const userId = req.user.userId; // from authMiddleware
  const user = await User.findById(userId).select('-password'); // Exclude password

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

module.exports = { getProfile };
