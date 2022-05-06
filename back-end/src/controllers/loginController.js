const rescue = require('express-rescue');
const {
  loginService,
} = require('../services/loginService');

const { status } = require('../utils/errorsMessages');

const {
  validateWithJoi,
} = require('../utils/errors');

const loginSchema = require('../schemas/loginSchemas');

const loginController = rescue(async (req, res) => {
  validateWithJoi(loginSchema, req.body);
  const login = await loginService(req.body);
  return res.status(status.ok).json(login);
});

module.exports = {
  loginController,
};