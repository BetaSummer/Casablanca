const memberService = require('../service/member');

class MemberController {
  async index(ctx) {
    const generation = ctx.query.generation;
    const members = ctx.query.generation ? await memberService.findByGeneration(generation) :
    await memberService.findAll();
    ctx.body = members;
  }
}

module.exports = new MemberController();