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

const read = rescue(async (_req, res) => {
  const response = await saleService.read();
  res.status(status.ok).json(response);
});

const readOne = rescue(async (req, res) => {
  const response = await saleService.readOne(req.params.id);
  res.status(status.ok).json(response);
});

const updateStatus = rescue(async (req, res) => {
  const saleStatus = req.body.status;
  const response = await saleService.updateStatus(req.params.id, saleStatus);
  res.status(status.ok).json(response);
});

module.exports = { read, create, readOne, updateStatus };
