const router  = require('koa-router')();
let fileCmd = require('file-cmd');
const {enumService} = require('../services');

router.get('/enums', async function (next) {
    this.body = enumService.getAllEnums();
    await next
});



module.exports = router;