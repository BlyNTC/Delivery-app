const rescue = require('express-rescue');
const {
  loginService,
} = require('../services/loginService');

const {
  validateWithJoi,
} = require('../utils/errors');

const loginSchema = require('../schemas/loginSchemas');

const loginController = rescue(async (req, res) => {
  validateWithJoi(loginSchema, req.body);
  const login = await loginService(req.body);
  res.status(200).json(login);
});

module.exports = {
  loginController,
};