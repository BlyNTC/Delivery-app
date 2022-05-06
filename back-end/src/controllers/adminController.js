const rescue = require('express-rescue');
const Service = require('../services/adminService');
const { status, messages } = require('../utils/errorsMessages');

const create = rescue(async (req, res) => {
  const verificacao = await Service.verify(req.body);
  const user = await Service.create(req.body);
  if(verificacao) {
    return res.status(status.conflict).json(messages.USER_REGISTERED)
  }
  return res.status(status.created).json(user);
});

module.exports = { create };