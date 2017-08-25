export default {
  activeMembers({ members }) {
    return generation => members.data.filter(member => member.generation === generation);
  },
};
