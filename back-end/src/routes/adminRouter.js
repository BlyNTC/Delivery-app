const Router = require('express').Router();
const constroller = require('../controllers/adminController');

Router.post('/', constroller.create);

module.exports = Router;
