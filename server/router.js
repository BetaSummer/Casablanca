const router = require('koa-router')();
const memberController = require('./controller/member');

router.get('/api/members', memberController.index);

module.exports = router;
