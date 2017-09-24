const memberService = require('../service/member');

class MemberController {
  async index(ctx) {
    const group = ctx.query.group;
    const members = ctx.query.group
    ? await memberService.findByGroup(group)
    : await memberService.findAll();
    ctx.body = members;
  }
  async getGroups(ctx) {
    const groups = await memberService.getGroups();
    ctx.body = groups;
  }
  async updateMember(ctx) {
    const member = ctx.request.body;
    const newMember = await memberService.updateMember(member);
    ctx.status = 200;
    ctx.body = newMember;
  }
  async addMember(ctx) {
    const member = ctx.request.body;
    try {
      const data = await memberService.addMember(member);
      ctx.status = 201;
      ctx.body = data;
    } catch (e) {
      ctx.status = 500;
    }
  }
}

module.exports = new MemberController();
