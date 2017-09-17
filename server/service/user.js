const User = require('../model/user');

class UserService {
  async getUser(info) {
    const user = await User.findOne({ where: { email: info.email } });
    return user;
  }
}

module.exports = new UserService();
