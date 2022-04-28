const rescue = require('express-rescue');
const Service = require('../services/userService');
const registerSchema = require('../schemas/registerSchema');
const { validateWithJoi } = require('../utils/errors');
const { status } = require('../utils/errorsMessages');

const create = rescue(async(req, res) => {
  validateWithJoi(registerSchema, req.body);
  const user = await Service.create(req.body);
  res.status(status.created).json(user);
});

module.exports = { create };