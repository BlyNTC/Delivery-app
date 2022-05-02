const { Router } = require('express');

const login = require('./loginRouter');
const user = require('./userRouter');
const register = require('./registerRouter');
const token = require('./loadingRouter');
const product = require('./productRouter');

const router = Router();

router.use('/login', login);
router.use('/user', user);
router.use('/register', register);
router.use('/loading/session', token);
router.use('/customer/products', product);

module.exports = router;
