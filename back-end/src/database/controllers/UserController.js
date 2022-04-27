const Service = require('../services/UserService');

const create = async (req, res) => {
  const info = req.body;
  const response = await Service.create(info);
  res.status(response.status).json(response.content);
}