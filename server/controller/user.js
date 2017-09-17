const userService = require('../service/user');
const jwt = require('jsonwebtoken');
const secret = require('../config/config.dev').secret;

class UserController {
  async signIn(ctx) {
    const userInfo = ctx.request.body;
    const user = await userService.getUser(userInfo);
    if (user && user.password === userInfo.password) {
      ctx.body = jwt.sign({
        id: user.id,
        email: user.email,
      }, secret, { expiresIn: '24h' });
    } else {
      ctx.status = 401;
      ctx.body = 'Authentication failed!';
    }
  }
}

module.exports = new UserController();
