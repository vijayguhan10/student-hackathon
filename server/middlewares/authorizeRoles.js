const jwt = require('jsonwebtoken');
const getConnection = require('../utils/getConnection');

const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      const token = req.header('Authorization')?.split(' ')[1];
      if (!token) {
        return res
          .status(401)
          .json({ message: 'Access Denied. No token provided.' });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!roles.includes(decoded.role)) {
        return res
          .status(403)
          .json({ message: 'Access Denied. Unauthorized role.' });
      }

      if (decoded.role !== 'masterAdmin') {
        try {
          const dbConnection = await getConnection(decoded.dbname);
          req.db = dbConnection;
        } catch (dbError) {
          return res.status(500).json({
            message: 'Failed to connect to the database.',
            error: dbError.message
          });
        }
      }

      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid Token', error: error.message });
    }
  };
};

module.exports = authorizeRoles;
