const router = require('koa-router')();
const memberController = require('./controller/member');

router.get('/api/members', memberController.index)
<<<<<<< HEAD
      .get('/api/groups', memberController.getGroups)
      .put('/api/member', memberController.updateMember);
=======
      .get('/api/generations', memberController.getGenerations);
>>>>>>> develop

module.exports = router;
