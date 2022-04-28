const jwt = require('jsonwebtoken');

function jwtSign(payload, secret) {
  console.log('JWT SIGN PAYLOAD', payload);
  console.log('JWT SIGN SECRET', secret);
  return jwt.sign(payload, secret, {
    expiresIn: '7d',
  });
}

module.exports = {
  jwtSign,
};