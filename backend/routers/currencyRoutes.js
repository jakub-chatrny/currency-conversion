const router = require('koa-router')();
const {currencyService} = require('../services');

router.post('/convert',
    async function (next) {
        try {
            const {value, srcCurrency, dstCurrency} = this.request.body;
            this.body = {convertedValue: await currencyService.convert(value, srcCurrency, dstCurrency)}
        } catch (err) {
            console.log(err)
        }
        await next;
    }
);

module.exports = router;