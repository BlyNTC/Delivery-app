const rescue = require('express-rescue');
const saleService = require('../services/saleService');
const { status } = require('../utils/errorsMessages');

const read = async (_req, res) => {
  const response = await saleService.read();
  res.status(status.ok).json(response);
};

module.exports = { read };
