const Router = require('express').Router();
const Controller = require('../controllers/userController');

Router.get('/', Controller.find);

module.exports = Router;