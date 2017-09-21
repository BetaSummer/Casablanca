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
    await memberService.updateMember(member);
    ctx.status = 200;
  }
  async addMember(ctx) {
    const member = ctx.request.body;
    try {
      await memberService.addMember(member);
      ctx.status = 201;
    } catch (e) {
      ctx.status = 500;
    }
  }
}

module.exports = new MemberController();
