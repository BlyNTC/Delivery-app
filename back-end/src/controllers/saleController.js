const rescue = require('express-rescue');
const saleService = require('../services/saleService');
const { status } = require('../utils/errorsMessages');
const schema = require('../schemas/salesProductsSchema');
const { validateWithJoi } = require('../utils/errors');

const create = rescue(async (req, res) => {
  validateWithJoi(schema, req.body);
  const response = await saleService.create(req.body);
  res.status(status.created).json(response);
});

const read = async (_req, res) => {
  const response = await saleService.read();
  res.status(status.ok).json(response);
};

module.exports = { read, create };
