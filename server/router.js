const router = require('koa-router')();
const memberController = require('./controller/member');
const userController = require('./controller/user');

router.get('/api/members', memberController.index)
      .get('/api/groups', memberController.getGroups)
      .put('/api/member', memberController.updateMember)
      .post('/api/member', memberController.addMember)
      .post('/public/signin', userController.signIn);

module.exports = router;
