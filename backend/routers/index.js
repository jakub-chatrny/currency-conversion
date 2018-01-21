const api = require('koa-router')();
const enums = require('./enumRoutes');
const currency = require('./currencyRoutes');

api.use('/api',
    currency.routes(),
    enums.routes(),
);

module.exports = api;