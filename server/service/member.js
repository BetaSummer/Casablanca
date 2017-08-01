const Member = require('../model/member');

class MemberService {
  async findAll() {
    const members = await Member.findAll();
    return members;
  }
  async findByGeneration(generation) {
    const members = await Member.findAll({
      where: {
        generation,
      },
    });
    return members;
  }
}

module.exports = new MemberService();
