const jwt = require('jsonwebtoken');

const jwtKey = require("fs")
  .readFileSync(`${process.cwd()}/jwt.evaluation.key`, { encoding: "utf-8" });

function jwtSign(payload) {
  return jwt.sign(payload, jwtKey, {
    expiresIn: '7d',
  });
}

const validateJWT = (token) => {
  try {
    const decoded = jwt.verify(token, jwtKey);
    return decoded;
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = {
  jwtSign,
  validateJWT,
};
