const Router = require('express').Router();
const saleController = require('../controllers/saleController');

Router.get('/', saleController.read);

module.exports = Router;
