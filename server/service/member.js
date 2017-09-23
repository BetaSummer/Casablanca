const Member = require('../model/member');
const db = require('../config/db');
const fs = require('fs');
const util = require('util');

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
  async addMember(memberInfo) {
    const { avatar, name, group, major, info, github, blog } = memberInfo;
    const { image, fileName } = avatar;
    const base64Image = image.split(';base64,').pop();
    const writeFile = util.promisify(fs.writeFile);
    const member = {
      name,
      group,
      major,
      info,
      github,
      blog,
      photo: fileName,
    };
    try {
      await writeFile(`./src/assets/avatar/${fileName}`, base64Image, { encoding: 'base64' });
      await Member.build(member).save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new MemberService();
