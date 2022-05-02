const express = require('express');

const app = express();

app.use(require('cors')());

app.use('/images', express.static('images'));

app.use(require('body-parser').json());

app.use('/', require('../routes'));

app.use('/', require('../handlers/errorHandler'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
