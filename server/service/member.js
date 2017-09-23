const Member = require('../model/member');
const db = require('../config/db');
const fs = require('fs');
const util = require('util');

// To refactor
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
    const { id, avatar, name, group, major, info, github, blog } = memberInfo;
    const { image, fileName } = avatar;
    if (image.length > 0) {
      const base64Image = image.split(';base64,').pop();
      const writeFile = util.promisify(fs.writeFile);
      try {
        await writeFile(`./src/assets/avatar/${fileName}`, base64Image, { encoding: 'base64' });
      } catch (e) {
        throw e;
      }
    }
    const member = {
      name,
      group,
      major,
      info,
      github,
      blog,
      photo: fileName,
    };
    Member.update(member, {
      where: {
        id,
      },
    });
  }
  async addMember(memberInfo) {
    const { avatarBase64, name, group, major, info, github, blog, photo } = memberInfo;
    const base64Image = avatarBase64.split(';base64,').pop();
    const writeFile = util.promisify(fs.writeFile);
    const member = {
      name,
      group,
      major,
      info,
      github,
      blog,
      photo,
    };
    try {
      await writeFile(`./src/assets/avatar/${photo}`, base64Image, { encoding: 'base64' });
      await Member.build(member).save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new MemberService();
