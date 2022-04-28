const Router = require('express').Router();
const { loginController } = require('../controllers/loginController');

Router.post('/', loginController);

module.exports = Router;