const router = require('koa-router')();
const memberController = require('./controller/member');

router.get('/api/members', memberController.index)
      .get('/api/generations', memberController.getGenerations);

module.exports = router;
