const Router = require('express').Router();
const productController = require('../controllers/productController');

Router.get('/', productController.read);

module.exports = Router;
