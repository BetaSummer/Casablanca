const memberService = require('../service/member');

class MemberController {
  async index(ctx) {
    const generation = ctx.query.generation;
    const members = ctx.query.generation
    ? await memberService.findByGeneration(generation)
    : await memberService.findAll();
    ctx.body = members;
  }
  async getGenerations(ctx) {
    const generations = await memberService.getGenerations();
    ctx.body = generations;
  }
  async updateMember(ctx) {
    const member = ctx.request.body;
    await memberService.updateMember(member);
    ctx.status = 200;
  }
}

module.exports = new MemberController();
