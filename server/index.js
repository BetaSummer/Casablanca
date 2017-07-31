const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyparser());

app.listen('3000');
