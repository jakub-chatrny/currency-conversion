const router  = require('koa-router')();

const {statsService} = require('../services');

router.get(
    '/stats',
    async function (next) {
        this.body = statsService.getAllStats();
        await next
    }
);

module.exports = router;