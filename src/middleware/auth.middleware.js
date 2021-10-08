const jwt = require('jsonwebtoken');

const jwtSecret = 'xkslfm29irj3rtf2m3fdio';

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[0];
    if (!token) {
      res.send({
        error: 'token not funded',
      });
    }

    req.user = jwt.verify(token, jwtSecret);
    next();
  } catch (e) {
    res.send({
      error: 'token invalid',
    });
  }
};