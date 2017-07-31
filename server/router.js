const router = require('koa-router')();
const member = require('./controller/member');

router.get('/api/members', member.index);
