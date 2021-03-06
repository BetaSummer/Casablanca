const Member = require('../model/member');
const db = require('../db');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

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
    const { id, avatarBase64, photo } = memberInfo;
    // if the avatar is modified, rewrite the avatar file
    if (avatarBase64.length > 0) {
      const base64Image = avatarBase64.split(';base64,').pop();
      const oldMember = await Member.findById(id);
      try {
        // rewrite the avatar file
        fs.unlink(`./dist/static/avatar/${oldMember.photo}`, (err) => {
          // ignore the error if the file doesn't exist
          if (err.code !== 'ENOENT') {
            throw err;
          }
        });
        await writeFile(`./dist/static/avatar/${photo}`, base64Image, { encoding: 'base64' });
      } catch (e) {
        throw e;
      }
    }
    try {
      delete memberInfo.avatarBase64;
      await Member.update(memberInfo, {
        where: {
          id,
        },
      });
      return memberInfo;
    } catch (e) {
      throw e;
    }
  }
  async addMember(memberInfo) {
    const { avatarBase64, photo } = memberInfo;
    const base64Image = avatarBase64.split(';base64,').pop();
    try {
      await writeFile(`./dist/static/avatar/${photo}`, base64Image, { encoding: 'base64' });
      delete memberInfo.avatarBase64;
      return await Member.build(memberInfo).save();
    } catch (e) {
      throw e;
    }
  }
  async deleteMember(id) {
    try {
      const { photo } = await Member.findById(id);
      fs.unlink(`./dist/static/avatar/${photo}`, (err) => {
        // ignore the error if the file doesn't exist
        if (err.code !== 'ENOENT') {
          throw err;
        }
      });
      await Member.destroy({
        where: {
          id,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new MemberService();
