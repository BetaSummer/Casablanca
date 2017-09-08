const Member = require('../model/member');
const db = require('../config/db');

class MemberService {
  async findAll() {
    const members = await Member.findAll();
    return members;
  }
  async findByGroup(group) {
    const members = await Member.findAll({
      where: {
        group,
      },
    });
    return members;
  }
  async getGroups() {
    const groups = await db.query('select distinct `group` from members order by `group`', {
      type: db.QueryTypes.SELECT,
    });
    return groups;
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
