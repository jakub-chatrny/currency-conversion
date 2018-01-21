const api = require('koa-router')();
const enums = require('./enumRoutes');
const currency = require('./currencyRoutes');
const stats = require('./statsRoutes');

api.use('/api',
    currency.routes(),
    enums.routes(),
    stats.routes(),
);

module.exports = api;