const rescue = require('express-rescue');
const Service = require('../services/adminService');
const { status } = require('../utils/errorsMessages');

const create = rescue(async (req, res) => {
  const user = await Service.create(req.body);
  res.status(status.created).json(user);
});

module.exports = { create };