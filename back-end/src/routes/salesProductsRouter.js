const Router = require('express').Router();
const { read } = require('../controllers/salesProductsController');

Router.get('/', read);

module.exports = Router;