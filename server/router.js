const router = require('koa-router')();
const memberController = require('./controller/member');

router.get('/api/members', memberController.index)
      .get('/api/generations', memberController.getGenerations)
      .put('/api/member', memberController.updateMember);

module.exports = router;
