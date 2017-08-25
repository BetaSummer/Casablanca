const Member = require('../model/member');
const db = require('../config/db');

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
  async getGenerations() {
    const generations = await db.query('select distinct generation from members order by generation', {
      type: db.QueryTypes.SELECT,
    });
    return generations;
  }
  async updateMember(memberInfo) {
    const { id } = memberInfo;
    Member.update(memberInfo, {
      where: {
        id,
      },
    });
  }
}

module.exports = new MemberService();
