const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role
  };

  if (user.role !== 'masterAdmin') {
    payload.dbname = user.dbname || null;
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
};

module.exports = generateToken;
