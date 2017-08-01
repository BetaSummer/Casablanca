const memberService = require('../service/member');

class MemberController {
  async index(ctx) {
    const generation = ctx.query.generation || '';
    const members = generation === '' ? await memberService.findAll(generation) : await memberService.findByGeneration(generation);
    ctx.body = members;
  }
}

module.exports = new MemberController();
