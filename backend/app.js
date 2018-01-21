let Koa = require('Koa')
let cors = require('koa-cors')
let bodyparser = require('koa-bodyparser')
let api = require('./routers');

let app = new Koa();

app
    .use(cors())
    .use(bodyparser())
    .use(api.routes());

app.listen(9999)