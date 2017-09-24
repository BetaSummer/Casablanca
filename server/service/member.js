const Member = require('../model/member');
const db = require('../config/db');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

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
    const { id, avatarBase64, name, group, major, info, github, blog, photo } = memberInfo;
    const member = {
      id,
      name,
      group,
      major,
      info,
      github,
      blog,
      photo,
    };
    if (avatarBase64.length > 0) {
      const base64Image = avatarBase64.split(';base64,').pop();
      const oldMember = await Member.findById(id);
      try {
        // 替换头像
        await unlink(`./static/avatar/${oldMember.photo}`);
        await writeFile(`./static/avatar/${photo}`, base64Image, { encoding: 'base64' });
      } catch (e) {
        throw e;
      }
    }
    try {
      await Member.update(member, {
        where: {
          id,
        },
      });
      return member;
    } catch (e) {
      throw e;
    }
  }
  async addMember(memberInfo) {
    const { avatarBase64, name, group, major, info, github, blog, photo } = memberInfo;
    const base64Image = avatarBase64.split(';base64,').pop();
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
      await writeFile(`./static/avatar/${photo}`, base64Image, { encoding: 'base64' });
      return await Member.build(member).save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new MemberService();
