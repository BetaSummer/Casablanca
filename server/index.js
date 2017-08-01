const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./router');

const app = new Koa();
app.use(bodyparser());
app.use(router.routes());

app.listen('3000');
