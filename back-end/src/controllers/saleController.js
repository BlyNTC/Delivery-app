const rescue = require('express-rescue');
const saleService = require('../services/saleService');
const { status } = require('../utils/errorsMessages');

const create = async (req, res) => {
  const criar = await saleService.create(req.body);
  res.status(status.created).json(criar);
};

const read = async (_req, res) => {
  const response = await saleService.read();
  res.status(status.ok).json(response);
};

module.exports = { read, create };
