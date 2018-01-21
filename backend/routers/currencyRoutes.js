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

router.get('/convert',
    async function (next) {
        try {
            console.log(this.request.query);
            const {value, srcCurrency, dstCurrency} = this.request.query;
            this.body = {convertedValue: await currencyService.convert(value, srcCurrency, dstCurrency)}
        } catch (err) {
            console.log(err)
        }
        await next;
    }
);

module.exports = router;