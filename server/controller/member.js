class MemberController {
  async index(ctx) {
    const generation = ctx.query.generation || '';
    const members = await getMembers(generation);
  }
}
