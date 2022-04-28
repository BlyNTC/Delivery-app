const jwt = require('jsonwebtoken');

function jwtSign(payload, secret) {
  return jwt.sign(payload, secret, {
    expiresIn: '7d',
  });
}

const validateJWT = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = {
  jwtSign,
  validateJWT
};