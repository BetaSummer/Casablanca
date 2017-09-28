const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');
const jwt = require('jsonwebtoken');

const config = require('./config');
const router = require('./router');

const { secret, port } = config;
const app = new Koa();
app.use(cors());
app.use(bodyparser({
  jsonLimit: '20mb',
}));

app.use((ctx, next) => {
  if (ctx.header && ctx.header.authorization) {
    try {
      jwt.verify(ctx.header.authorization, secret);
      return next();
    } catch (e) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use correct Authorization header to get access';
    }
  } else if (ctx.url.match(/^\/public/)) {
    return next();
  } else {
    ctx.status = 401;
    ctx.body = 'Protected resource, use Authorization header to get access';
  }
});

app.use(router.routes());

app.listen(port);
