const { Router } = require('express');

const login = require('./loginRouter');
const register = require('./registerRouter');
const sales = require('./salesRoute'); 

const router = Router();

router.use('/login', login);
router.use('/register', register);
router.use('/customer/orders', sales);

module.exports = router;
