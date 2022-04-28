const { Router } = require('express');

const login = require('./loginRouter');

const router = Router();

router.use('/login', login);

module.exports = router;
