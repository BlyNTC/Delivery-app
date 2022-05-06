const rescue = require('express-rescue');
const Service = require('../services/userService');
const registerSchema = require('../schemas/registerSchema');
const { validateWithJoi } = require('../utils/errors');
const { status } = require('../utils/errorsMessages');

const create = rescue(async (req, res) => {
  validateWithJoi(registerSchema, req.body);
  const user = await Service.create(req.body);
  res.status(status.created).json(user);
});

const read = rescue(async (req, res) => {
  const { role } = req.query;
  if (role) {
    const users = await Service.read(role);
    return res.status(status.ok).json(users);
  }
  const users = await Service.read(role);
  res.status(status.ok).json(users);
});

const readById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await Service.readById(id);
  res.status(status.ok).json(user);
});

module.exports = { create, read, readById };