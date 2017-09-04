const router = require('koa-router')();
const memberController = require('./controller/member');

router.get('/api/members', memberController.index)
      .get('/api/groups', memberController.getGroups)
      .put('/api/member', memberController.updateMember);

module.exports = router;
